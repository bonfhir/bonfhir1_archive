import { build, FhirRestfulClient, WithRequired } from "@bonfhir/core/r4b";
import { AuditEvent, FhirResource, Subscription } from "fhir/r4";
import { createErrorAuditEvent } from "./audit-event";

export interface FhirSubscription<
  TResource extends FhirResource = FhirResource
> {
  /** The Subscription selection criteria. */
  criteria: Subscription["criteria"];

  /** The Subscription reason (to document is on the server). */
  reason: Subscription["reason"];

  /** The Subscription endpoint to hit (webhook url). */
  endpoint: string;

  /**
   * The subscription handler.
   * If hosted in an HTTP setting, the returned value might be JSON-serialized back as the response.
   */
  handler: FhirSubscriptionHandler<TResource>;
}

export type FhirSubscriptionHandler<
  TResource extends FhirResource = FhirResource
> = (
  args: FhirSubscriptionHandlerArgs<TResource>
) => FhirSubscriptionHandlerResult;

export interface FhirSubscriptionHandlerArgs<
  TResource extends FhirResource = FhirResource
> {
  fhirClient: FhirRestfulClient;

  /** The resource that matches the subscription. */
  resource: WithRequired<TResource, "id">;

  /** The configured logger. */
  logger:
    | Pick<typeof console, "debug" | "info" | "warn" | "error">
    | null
    | undefined;
}

export type FhirSubscriptionHandlerResult =
  | void
  | Promise<void>
  | object
  | Promise<object>;

export type SubscriptionLogger = Pick<
  typeof console,
  "debug" | "info" | "warn" | "error"
>;

export interface RegisterSubscriptionsArgs {
  fhirClient: FhirRestfulClient;

  logger: SubscriptionLogger;

  /** The API base URL */
  baseUrl: string | URL | null | undefined;

  /** The subscription payload, a.k.a. MIME type. Defaults to application/fhir+json */
  payload?: Subscription["channel"]["payload"] | null | undefined;

  /** A secret shared between the API and the FHIR subscription use to secure the endpoint. */
  webhookSecret: string;

  /**
   * The name of the security header used. Defaults to "X-Subscription-Auth"
   */
  securityHeader?: string | null | undefined;

  /**
   * If set, will automatically create AuditEvent using this as a source / reference.
   * Alternatively, you can build the AuditEvents yourself.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  auditEvent?: string | ((error: any) => AuditEvent) | null | undefined;

  /** The list of subscriptions to register */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  subscriptions: FhirSubscription<any>[];
}

/**
 * Create the Subscriptions for the webhooks.
 */
export async function registerSubscriptions({
  auditEvent,
  payload,
  baseUrl,
  fhirClient,
  logger,
  subscriptions,
  securityHeader,
  webhookSecret,
}: RegisterSubscriptionsArgs) {
  logger.info("Registering subscriptions...");

  for (const subscription of subscriptions) {
    try {
      const existingSubscription = (
        await fhirClient.search("Subscription", (search) =>
          search.url(new URL(subscription.endpoint, baseUrl || undefined).href)
        )
      ).entry?.[0]?.resource;

      const securityHeaderValue = `${
        securityHeader || "X-Subscription-Auth"
      }: ${webhookSecret}`;

      if (existingSubscription) {
        if (
          existingSubscription.criteria !== subscription.criteria ||
          existingSubscription.reason !== subscription.reason ||
          existingSubscription.channel?.payload !==
            (payload ?? "application/fhir+json") ||
          !existingSubscription.channel?.header?.includes(securityHeaderValue)
        ) {
          await fhirClient.update({
            ...existingSubscription,
            reason: subscription.reason,
            criteria: subscription.criteria,
            channel: {
              ...existingSubscription.channel,
              payload: payload ?? "application/fhir+json",
              header: [
                ...(existingSubscription.channel?.header || []),
                securityHeaderValue,
              ],
            },
          });
        }
      } else {
        await fhirClient.create(
          build("Subscription", {
            status: "active",
            reason: subscription.reason,
            criteria: subscription.criteria,
            channel: {
              type: "rest-hook",
              endpoint: new URL(subscription.endpoint, baseUrl || undefined)
                .href,
              payload: payload ?? "application/fhir+json",
              header: [securityHeaderValue],
            },
          })
        );
      }

      logger.debug(
        `Subscription ${subscription.reason} for ${subscription.criteria} on ${subscription.endpoint} registered.`
      );
    } catch (error) {
      logger.error(
        `Error while registering subscription ${subscription.reason} on ${subscription.endpoint}`,
        error
      );

      if (auditEvent) {
        try {
          await createErrorAuditEvent({
            auditEvent,
            error,
            fhirClient,
          });
        } catch (auditEventError) {
          logger.error(auditEventError);
        }
      }

      throw error;
    }
  }
}
