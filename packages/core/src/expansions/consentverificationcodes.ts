/**
 * This value set includes base Consent Verification codes.
 * http://terminology.hl7.org/ValueSet/consent-verification
 */
export const ConsentVerificationCodesCode = {
  /**
   * FamilyVerified
   */
  family: "family",

  /**
   * Validation
   */
  validation: "validation",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConsentVerificationCodesCode =
  typeof ConsentVerificationCodesCode[keyof typeof ConsentVerificationCodesCode];
