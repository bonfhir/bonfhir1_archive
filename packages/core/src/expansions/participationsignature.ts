/**
 * A code specifying whether and how the participant has attested his participation through a signature and or whether such a signature is needed.

*Examples:* A surgical Procedure act object (representing a procedure report) requires a signature of the performing and responsible surgeon, and possibly other participants. (See also: Participation.signatureText.)
 * http://terminology.hl7.org/ValueSet/v3-ParticipationSignature
 */
export const ParticipationSignatureCode = {
  /**
   * intended
   */
  I: "I",

  /**
   * signed
   */
  S: "S",

  /**
   * required
   */
  X: "X",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationSignatureCode =
  typeof ParticipationSignatureCode[keyof typeof ParticipationSignatureCode];
