/**
 * A person or organization who should be contacted for follow-up questions about the act in place of the author.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationCallbackContact
 */
export const ParticipationCallbackContactCode = {
  /**
   * callback contact
   */
  callbackcontact: "CALLBCK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationCallbackContactCode =
  typeof ParticipationCallbackContactCode[keyof typeof ParticipationCallbackContactCode];
