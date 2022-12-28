/**
 * Codes for the reason why a communication did not happen.
 * http://hl7.org/fhir/ValueSet/communication-not-done-reason
 */
export const CommunicationNotDoneReasonCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CommunicationNotDoneReasonCode =
  typeof CommunicationNotDoneReasonCode[keyof typeof CommunicationNotDoneReasonCode];
