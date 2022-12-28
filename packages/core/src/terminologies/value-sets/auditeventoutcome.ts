/**
 * Indicates whether the event succeeded or failed.
 * http://hl7.org/fhir/ValueSet/audit-event-outcome
 */
export const AuditEventOutcomeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AuditEventOutcomeCode =
  typeof AuditEventOutcomeCode[keyof typeof AuditEventOutcomeCode];
