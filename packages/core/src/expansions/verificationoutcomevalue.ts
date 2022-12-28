/**
 * Values for observations of verification act results

**Examples:** Verified, not verified, verified with warning.
 * http://terminology.hl7.org/ValueSet/v3-VerificationOutcomeValue
 */
export const VerificationOutcomeValueCode = {
  /**
   * verification outcome
   */
  _VerificationOutcomeValue: "_VerificationOutcomeValue",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type VerificationOutcomeValueCode =
  typeof VerificationOutcomeValueCode[keyof typeof VerificationOutcomeValueCode];
