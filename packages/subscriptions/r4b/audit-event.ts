import {
  build,
  buildReferenceFromResource,
  FhirRestfulClient,
} from "@bonfhir/core/r4b";
import { AuditEvent, FhirResource } from "fhir/r4";
import isError from "lodash/isError";
import isFunction from "lodash/isFunction";
import isString from "lodash/isString";

export type AuditEventConfiguration =
  | string
  | ((
      error: unknown,
      relatedResource?: FhirResource | null | undefined
    ) => AuditEvent);

export interface CreateErrorAuditEventArgs {
  auditEvent: AuditEventConfiguration;
  fhirClient: FhirRestfulClient;
  error: unknown;
  relatedResource?: FhirResource | null | undefined;
}

/**
 * This function create and save an AuditEvent related to an error in subscription processing.
 */
export async function createErrorAuditEvent({
  auditEvent,
  fhirClient,
  error,
  relatedResource,
}: CreateErrorAuditEventArgs): Promise<AuditEvent> {
  return await fhirClient.create(
    isFunction(auditEvent)
      ? auditEvent(error, relatedResource)
      : build("AuditEvent", {
          type: {
            code: "subscription-error",
            display: "Subscription Processing Error",
            system: "http://terminology.bonfhir.dev/audit-event-type",
          },
          recorded: new Date().toISOString(),
          agent: [
            {
              name: auditEvent,
              requestor: false,
            },
          ],
          source: {
            observer: relatedResource
              ? buildReferenceFromResource(relatedResource, "version-specific")
              : {
                  display: auditEvent,
                },
          },
          outcome: "4",
          outcomeDesc: errorToString(error),
        })
  );
}

export function errorToString(error: unknown): string {
  if (isError(error)) {
    return `${error.message} (${error.stack})`;
  }

  if (isString(error)) {
    return error;
  }

  try {
    return JSON.stringify(error);
  } catch {
    return `Unknown error: ${error}`;
  }
}
