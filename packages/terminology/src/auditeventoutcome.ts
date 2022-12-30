/**
 * The type of process where the audit event originated from.
 * http://terminology.hl7.org/ValueSet/audit-event-outcome
 */
export const AuditEventOutcomeCode = {
  /**
   * Success
   */
  "0": "0",

  /**
   * Minor failure
   */
  "4": "4",

  /**
   * Serious failure
   */
  "8": "8",

  /**
   * Major failure
   */
  "12": "12",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AuditEventOutcomeCode =
  typeof AuditEventOutcomeCode[keyof typeof AuditEventOutcomeCode];
