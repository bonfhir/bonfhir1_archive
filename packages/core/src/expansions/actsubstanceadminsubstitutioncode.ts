/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActSubstanceAdminSubstitutionCode
 */
export const ActSubstanceAdminSubstitutionCodeCode = {
  /**
   * equivalent
   */
  E: "E",

  /**
   * equivalent composition
   */
  EC: "EC",

  /**
   * brand composition
   */
  BC: "BC",

  /**
   * generic composition
   */
  G: "G",

  /**
   * therapeutic alternative
   */
  TE: "TE",

  /**
   * therapeutic brand
   */
  TB: "TB",

  /**
   * therapeutic generic
   */
  TG: "TG",

  /**
   * formulary
   */
  F: "F",

  /**
   * none
   */
  N: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActSubstanceAdminSubstitutionCodeCode =
  typeof ActSubstanceAdminSubstitutionCodeCode[keyof typeof ActSubstanceAdminSubstitutionCodeCode];
