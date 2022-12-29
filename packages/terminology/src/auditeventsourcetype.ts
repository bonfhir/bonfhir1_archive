/**
 * The type of process where the audit event originated from.
 * http://terminology.hl7.org/ValueSet/audit-source-type
 */
export const AuditEventSourceTypeCode = {
  /**
   * User Device
   */
  UserDevice: "1",

  /**
   * Data Interface
   */
  DataInterface: "2",

  /**
   * Web Server
   */
  WebServer: "3",

  /**
   * Application Server
   */
  ApplicationServer: "4",

  /**
   * Database Server
   */
  DatabaseServer: "5",

  /**
   * Security Server
   */
  SecurityServer: "6",

  /**
   * Network Device
   */
  NetworkDevice: "7",

  /**
   * Network Router
   */
  NetworkRouter: "8",

  /**
   * Other
   */
  Other: "9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AuditEventSourceTypeCode =
  typeof AuditEventSourceTypeCode[keyof typeof AuditEventSourceTypeCode];
