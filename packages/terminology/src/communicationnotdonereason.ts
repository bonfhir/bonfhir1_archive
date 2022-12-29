/**
 * Codes for the reason why a communication did not happen.
 * http://terminology.hl7.org/ValueSet/communication-not-done-reason
 */
export const CommunicationNotDoneReasonCode = {
  /**
   * Unknown
   */
  Unknown: "unknown",

  /**
   * System Error
   */
  SystemError: "system-error",

  /**
   * Invalid Phone Number
   */
  InvalidPhoneNumber: "invalid-phone-number",

  /**
   * Recipient Unavailable
   */
  RecipientUnavailable: "recipient-unavailable",

  /**
   * Family Objection
   */
  FamilyObjection: "family-objection",

  /**
   * Patient Objection
   */
  PatientObjection: "patient-objection",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CommunicationNotDoneReasonCode =
  typeof CommunicationNotDoneReasonCode[keyof typeof CommunicationNotDoneReasonCode];
