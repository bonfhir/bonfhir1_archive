import { AuditEvent } from "fhir/r4";

export const buildAuditEvent = (
  resource: Omit<AuditEvent, "resourceType">
) => ({
  ...resource,
  resourceType: "AuditEvent",
});
