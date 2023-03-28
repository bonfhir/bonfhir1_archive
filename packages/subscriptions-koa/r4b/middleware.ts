import { FhirRestfulClient } from "@bonfhir/core/r4b";
import {
  AuditEventConfiguration,
  createErrorAuditEvent,
  errorToString,
  FhirSubscription,
  registerSubscriptions,
  SubscriptionLogger,
} from "@bonfhir/subscriptions/r4b";
import Router from "@koa/router";
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

/**
 * Register subscriptions and routes to webhooks handlers.
 */
export async function fhirSubscriptions(config: FhirSubscriptionsConfig) {
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

  const router = new Router();

  if (config.register === "endpoint") {
    router.post(
      config.registerEndpoint || "/fhir/register-subscriptions",
      async (context) => {
        if (context.get(lowercaseSecurityHeader) !== config.webhookSecret) {
          logger?.warn(
            `Received unauthorized request for ${context.url} (${context.get(
              lowercaseSecurityHeader
            )}).`
          );
          context.status = 401;
          return;
        }

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
          context.status = 204;
        } catch (error) {
          context.status = 500;
          context.response.body = `Error: ${error}`;
        }
      }
    );
  }

  for (const subscription of config.subscriptions) {
    router.post(subscription.endpoint, async (context) => {
      if (context.get(lowercaseSecurityHeader) !== config.webhookSecret) {
        logger?.warn(
          `Received unauthorized request for ${context.url} (${context.get(
            lowercaseSecurityHeader
          )}).`
        );
        context.status = 401;
        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const resource = (context.request as any).body;
      try {
        const result = await subscription.handler({
          fhirClient:
            typeof config.fhirClient === "function"
              ? await config.fhirClient()
              : config.fhirClient,
          resource,
          logger,
        });

        if (result == null) {
          context.status = 204;
        } else {
          context.status = 200;
          context.response.body = result;
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

        context.status = 500;
        context.response.body = errorToString(error);
      }
    });
  }

  return router.routes();
}
