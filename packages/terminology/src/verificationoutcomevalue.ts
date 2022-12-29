/**
 * Values for observations of verification act results

**Examples:** Verified, not verified, verified with warning.
 * http://terminology.hl7.org/ValueSet/v3-VerificationOutcomeValue
 */
export const VerificationOutcomeValueCode = {
  /**
   * verification outcome
   */
  verificationoutcome: "_VerificationOutcomeValue",

  /**
   * active coverage
   */
  activecoverage: "ACT",

  /**
   * active - pending investigation
   */
  activependinginvestigation: "ACTPEND",

  /**
   * eligible
   */
  eligible: "ELG",

  /**
   * inactive
   */
  inactive: "INACT",

  /**
   * inactive - pending investigation
   */
  inactivependinginvestigation: "INPNDINV",

  /**
   * inactive - pending eligibility update
   */
  inactivependingeligibilityupdate: "INPNDUPD",

  /**
   * not eligible
   */
  noteligible: "NELG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type VerificationOutcomeValueCode =
  typeof VerificationOutcomeValueCode[keyof typeof VerificationOutcomeValueCode];
