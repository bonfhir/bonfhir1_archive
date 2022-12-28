/**
 * Reasons why substitution of a substance administration request is not permitted.
 * http://terminology.hl7.org/ValueSet/v3-SubstanceAdminSubstitutionNotAllowedReason
 */
export const SubstanceAdminSubstitutionNotAllowedReasonCode = {
  /**
   * Patient request
   */
  PAT: "PAT",

  /**
   * SubstanceAdminSubstitutionNotAllowedReason
   */
  _SubstanceAdminSubstitutionNotAllowedReason:
    "_SubstanceAdminSubstitutionNotAllowedReason",

  /**
   * allergy intolerance
   */
  ALGINT: "ALGINT",

  /**
   * compliance concern
   */
  COMPCON: "COMPCON",

  /**
   * therapeutic characteristics
   */
  THERCHAR: "THERCHAR",

  /**
   * clinical trial drug
   */
  TRIAL: "TRIAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubstanceAdminSubstitutionNotAllowedReasonCode =
  typeof SubstanceAdminSubstitutionNotAllowedReasonCode[keyof typeof SubstanceAdminSubstitutionNotAllowedReasonCode];
