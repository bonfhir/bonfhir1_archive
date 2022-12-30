/**
 * Response to an insurance coverage eligibility query or authorization request.
 * http://terminology.hl7.org/ValueSet/v3-ActCoverageConfirmationCode
 */
export const ActCoverageConfirmationCodeCode = {
  /**
   * ActCoverageAuthorizationConfirmationCode
   */
  _ActCoverageAuthorizationConfirmationCode:
    "_ActCoverageAuthorizationConfirmationCode",

  /**
   * Authorized
   */
  AUTH: "AUTH",

  /**
   * Not Authorized
   */
  NAUTH: "NAUTH",

  /**
   * ActCoverageEligibilityConfirmationCode
   */
  _ActCoverageEligibilityConfirmationCode:
    "_ActCoverageEligibilityConfirmationCode",

  /**
   * Eligible
   */
  ELG: "ELG",

  /**
   * Not Eligible
   */
  NELG: "NELG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCoverageConfirmationCodeCode =
  typeof ActCoverageConfirmationCodeCode[keyof typeof ActCoverageConfirmationCodeCode];
