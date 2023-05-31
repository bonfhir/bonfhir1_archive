import { FhirRestfulClient } from "@bonfhir/core/r4b";
import {
  AuditEventConfiguration,
  createErrorAuditEvent,
  errorToString,
  FhirSubscription,
  registerSubscriptions,
  SubscriptionLogger,
} from "@bonfhir/subscriptions/r4b";

import { Subscription } from "fhir/r4";
import { NextRequest, NextResponse } from "next/server";

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
export async function fhirSubscriptions(
  config: FhirSubscriptionsConfig
): Promise<(request: NextRequest) => Promise<NextResponse>> {
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

  const securityHeader = config.securityHeader || "X-Subscription-Auth";

  function verifySecurityHeader(request: NextRequest): boolean {
    return (
      request.headers.has(securityHeader) &&
      request.headers.get(securityHeader) === config.webhookSecret
    );
  }

  async function fhirMiddleware(request: NextRequest): Promise<NextResponse> {
    if (config.register === "endpoint") {
      if (!verifySecurityHeader(request)) {
        logger?.warn(`Received unauthorized request for ${request.url}.`);
        return new NextResponse(null, {
          status: 401,
        });
      }
      if (
        request.method === "POST" &&
        request.nextUrl.pathname ===
          (config.registerEndpoint || "/fhir/register-subscriptions")
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
          return new NextResponse(null, { status: 204 });
        } catch (error) {
          return new NextResponse(`Error: ${error}`, { status: 500 });
        }
      }
    }

    const subscription = config.subscriptions.find(
      (sub) => `${sub.endpoint}` === request.nextUrl.pathname
    );

    if (subscription) {
      if (!verifySecurityHeader(request)) {
        logger?.warn(`Received unauthorized request for ${request.url}.`);
        return new NextResponse(null, {
          status: 401,
        });
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const resource = await request.json();
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
          return new NextResponse(null, {
            status: 204,
          });
        } else {
          return new NextResponse(JSON.stringify(result), {
            status: 200,
          });
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
        return new NextResponse(errorToString(error), {
          status: 500,
        });
      }
    }

    return NextResponse.next();
  }

  return fhirMiddleware;
}
