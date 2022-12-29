/**
 * An act which describes the process whereby a 'verifying party' validates either the existence of the Role attested to by some Credential or the actual Vetting act and its details.
 * http://terminology.hl7.org/ValueSet/v3-ActClassVerification
 */
export const ActClassVerificationCode = {
  /**
   * Verification
   */
  Verification: "VERIF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassVerificationCode =
  typeof ActClassVerificationCode[keyof typeof ActClassVerificationCode];
