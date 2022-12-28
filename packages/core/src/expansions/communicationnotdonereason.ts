/**
 * Codes for the reason why a communication did not happen.
 * http://terminology.hl7.org/ValueSet/communication-not-done-reason
 */
export const CommunicationNotDoneReasonCode = {
  /**
   * Unknown
   */
  unknown: "unknown",

  /**
   * System Error
   */
  "system-error": "system-error",

  /**
   * Invalid Phone Number
   */
  "invalid-phone-number": "invalid-phone-number",

  /**
   * Recipient Unavailable
   */
  "recipient-unavailable": "recipient-unavailable",

  /**
   * Family Objection
   */
  "family-objection": "family-objection",

  /**
   * Patient Objection
   */
  "patient-objection": "patient-objection",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CommunicationNotDoneReasonCode =
  typeof CommunicationNotDoneReasonCode[keyof typeof CommunicationNotDoneReasonCode];
