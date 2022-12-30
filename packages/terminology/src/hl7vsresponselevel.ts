/**
 * Concepts specifying application response levels defined for a given Master File Message at the MFE segment level, and used for MFN-Master File Notification message.  Specifies additional detail (beyond MSH-15 - Accept Acknowledgment Type and MSH-16 - Application Acknowledgment Type) for application-level acknowledgment paradigms for Master Files transactions.
 * http://terminology.hl7.org/ValueSet/v2-0179
 */
export const Hl7VSResponseLevelCode = {
  /**
   * Never.  No application-level response needed
   */
  NE: "NE",

  /**
   * Error/Reject conditions only.  Only MFA segments denoting errors must be returned via the application-level acknowledgment for this message
   */
  ER: "ER",

  /**
   * Always.  All MFA segments (whether denoting errors or not) must be returned via the application-level acknowledgment message
   */
  AL: "AL",

  /**
   * Success.  Only MFA segments denoting success must be returned via the application-level acknowledgment for this message
   */
  SU: "SU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSResponseLevelCode =
  typeof Hl7VSResponseLevelCode[keyof typeof Hl7VSResponseLevelCode];
