/**
 * Reasons why substitution of a substance administration request is not permitted.
 * http://terminology.hl7.org/ValueSet/v3-SubstanceAdminSubstitutionNotAllowedReason
 */
export const SubstanceAdminSubstitutionNotAllowedReasonCode = {
  /**
   * Patient request
   */
  Patientrequest: "PAT",

  /**
   * SubstanceAdminSubstitutionNotAllowedReason
   */
  SubstanceAdminSubstitutionNotAllowedReason:
    "_SubstanceAdminSubstitutionNotAllowedReason",

  /**
   * allergy intolerance
   */
  allergyintolerance: "ALGINT",

  /**
   * compliance concern
   */
  complianceconcern: "COMPCON",

  /**
   * therapeutic characteristics
   */
  therapeuticcharacteristics: "THERCHAR",

  /**
   * clinical trial drug
   */
  clinicaltrialdrug: "TRIAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubstanceAdminSubstitutionNotAllowedReasonCode =
  typeof SubstanceAdminSubstitutionNotAllowedReasonCode[keyof typeof SubstanceAdminSubstitutionNotAllowedReasonCode];
