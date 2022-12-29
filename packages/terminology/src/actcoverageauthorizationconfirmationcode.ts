/**
 * Indication of authorization for healthcare service(s) and/or product(s). If authorization is approved, funds are set aside.
 * http://terminology.hl7.org/ValueSet/v3-ActCoverageAuthorizationConfirmationCode
 */
export const ActCoverageAuthorizationConfirmationCodeCode = {
  /**
   * Authorized
   */
  Authorized: "AUTH",

  /**
   * Not Authorized
   */
  NotAuthorized: "NAUTH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCoverageAuthorizationConfirmationCodeCode =
  typeof ActCoverageAuthorizationConfirmationCodeCode[keyof typeof ActCoverageAuthorizationConfirmationCodeCode];
