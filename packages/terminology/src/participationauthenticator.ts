/**
 * A verifier who attests to the accuracy of an act, but who does not have privileges to legally authenticate the act. An example would be a resident physician who sees a patient and dictates a note, then later signs it. Their signature constitutes an authentication.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationAuthenticator
 */
export const ParticipationAuthenticatorCode = {
  /**
   * authenticator
   */
  authenticator: "AUTHEN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationAuthenticatorCode =
  typeof ParticipationAuthenticatorCode[keyof typeof ParticipationAuthenticatorCode];
