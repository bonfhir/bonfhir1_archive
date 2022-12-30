/**
 * The type of process where the audit event originated from.
 * http://terminology.hl7.org/ValueSet/audit-source-type
 */
export const AuditEventSourceTypeCode = {
  /**
   * User Device
   */
  "1": "1",

  /**
   * Data Interface
   */
  "2": "2",

  /**
   * Web Server
   */
  "3": "3",

  /**
   * Application Server
   */
  "4": "4",

  /**
   * Database Server
   */
  "5": "5",

  /**
   * Security Server
   */
  "6": "6",

  /**
   * Network Device
   */
  "7": "7",

  /**
   * Network Router
   */
  "8": "8",

  /**
   * Other
   */
  "9": "9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AuditEventSourceTypeCode =
  typeof AuditEventSourceTypeCode[keyof typeof AuditEventSourceTypeCode];
