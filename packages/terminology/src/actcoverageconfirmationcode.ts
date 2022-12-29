/**
 * Response to an insurance coverage eligibility query or authorization request.
 * http://terminology.hl7.org/ValueSet/v3-ActCoverageConfirmationCode
 */
export const ActCoverageConfirmationCodeCode = {
  /**
   * ActCoverageAuthorizationConfirmationCode
   */
  ActCoverageAuthorizationConfirmationCode:
    "_ActCoverageAuthorizationConfirmationCode",

  /**
   * Authorized
   */
  Authorized: "AUTH",

  /**
   * Not Authorized
   */
  NotAuthorized: "NAUTH",

  /**
   * ActCoverageEligibilityConfirmationCode
   */
  ActCoverageEligibilityConfirmationCode:
    "_ActCoverageEligibilityConfirmationCode",

  /**
   * Eligible
   */
  Eligible: "ELG",

  /**
   * Not Eligible
   */
  NotEligible: "NELG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCoverageConfirmationCodeCode =
  typeof ActCoverageConfirmationCodeCode[keyof typeof ActCoverageConfirmationCodeCode];
