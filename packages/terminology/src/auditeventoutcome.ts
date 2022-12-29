/**
 * The type of process where the audit event originated from.
 * http://terminology.hl7.org/ValueSet/audit-event-outcome
 */
export const AuditEventOutcomeCode = {
  /**
   * Success
   */
  Success: "0",

  /**
   * Minor failure
   */
  Minorfailure: "4",

  /**
   * Serious failure
   */
  Seriousfailure: "8",

  /**
   * Major failure
   */
  Majorfailure: "12",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AuditEventOutcomeCode =
  typeof AuditEventOutcomeCode[keyof typeof AuditEventOutcomeCode];
