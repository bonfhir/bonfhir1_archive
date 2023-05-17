import { FhirRestfulClient } from "@bonfhir/core/r4b";
import {
  AuditEventConfiguration,
  FhirSubscription,
  SubscriptionLogger,
  createErrorAuditEvent,
  errorToString,
  registerSubscriptions,
} from "@bonfhir/subscriptions/r4b";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from "aws-lambda";
import { Subscription } from "fhir/r4";

export interface FhirSubscriptionsConfig {
  /**
   * The {@link FhirRestfulClient} to use to register subscriptions.
   * If this is a function, it is invoked prior to every handler invocation as well.
   */
  fhirClient:
    | FhirRestfulClient
    | (() => FhirRestfulClient | Promise<FhirRestfulClient>);

  /** The subscriptions handlers to register. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  subscriptions: FhirSubscription<any>[];

  /** The API base URL */
  baseUrl: string | URL | null | undefined;

  /**
   * Indicates how to register the subscriptions:
   *  - during startup
   *  - when a specific endpoint is invoked
   *  - or disable registration
   */
  register: "startup" | "endpoint" | "off";

  /**
   * The registration endpoint to use. Defaults to /fhir/register-subscriptions.
   */
  registerEndpoint?: string | null | undefined;

  /**
   * The name of the security header used. Defaults to "X-Subscription-Auth"
   */
  securityHeader?: string | null | undefined;

  /** A secret shared between the API and the FHIR subscription use to secure the endpoint. */
  webhookSecret: string;

  /** The subscription payload, a.k.a. MIME type. Defaults to application/fhir+json */
  payload?: Subscription["channel"]["payload"] | null | undefined;

  /** Logger to use. Defaults to console. */
  logger?: SubscriptionLogger | null | undefined;

  /**
   * If set, will automatically create AuditEvent using this as a source / reference.
   * Alternatively, you can build the AuditEvents yourself.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  auditEvent?: AuditEventConfiguration | null | undefined;
}

export async function fhirSubscriptions(
  config: FhirSubscriptionsConfig
): Promise<Handler<APIGatewayProxyEvent, APIGatewayProxyResult>> {
  const logger = config.logger ?? console;

  const fhirClient =
    typeof config.fhirClient === "function"
      ? await config.fhirClient()
      : config.fhirClient;

  if (config.register === "startup") {
    await registerSubscriptions({
      baseUrl: config.baseUrl,
      fhirClient,
      logger,
      subscriptions: config.subscriptions,
      webhookSecret: config.webhookSecret,
      securityHeader: config.securityHeader,
      auditEvent: config.auditEvent,
      payload: config.payload,
    });
  }

  const lowercaseSecurityHeader = (
    config.securityHeader || "X-Subscription-Auth"
  ).toLowerCase();

  async function handler(
    event: APIGatewayProxyEvent
  ): Promise<APIGatewayProxyResult> {
    const path = event.path;
    const method = event.httpMethod;

    // Comparing the secret in the header to the secret in the config
    if (event.headers[lowercaseSecurityHeader] !== config.webhookSecret) {
      // Logging the error
      logger?.warn(
        `Received unauthorized request for ${event.path} (${lowercaseSecurityHeader}).`
      );
      return {
        statusCode: 401,
        body: "Unauthorized",
      };
    }

    if (
      config.register === "endpoint" &&
      method === "POST" &&
      path === (config.registerEndpoint || "/fhir/register-subscriptions")
    ) {
      try {
        await registerSubscriptions({
          baseUrl: config.baseUrl,
          fhirClient,
          logger,
          subscriptions: config.subscriptions,
          webhookSecret: config.webhookSecret,
          auditEvent: config.auditEvent,
          payload: config.payload,
        });
        return {
          statusCode: 204,
          body: "",
        };
      } catch (error) {
        return {
          statusCode: 500,
          body: `Error: ${error}`,
        };
      }
    }

    // Subscription handler request
    const subscription = config.subscriptions.find(
      (sub) => sub.endpoint === path
    );

    if (!subscription) {
      return {
        statusCode: 404,
        body: "Not found",
      };
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const resource = JSON.parse(event.body as any);

    try {
      const result = await subscription.handler({
        fhirClient,
        logger,
        resource,
      });

      if (result == null) {
        return {
          statusCode: 204,
          body: "",
        };
      } else {
        return {
          statusCode: 200,
          body: JSON.stringify(result),
        };
      }
    } catch (error) {
      logger.error(error);
      if (config.auditEvent) {
        try {
          await createErrorAuditEvent({
            auditEvent: config.auditEvent,
            error,
            fhirClient,
            relatedResource: resource,
          });
        } catch (auditEventError) {
          logger.error(auditEventError);
        }
      }
      return {
        statusCode: 500,
        body: JSON.stringify(errorToString(error)),
      };
    }
  }

  return handler;
}
