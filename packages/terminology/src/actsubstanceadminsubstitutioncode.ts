/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActSubstanceAdminSubstitutionCode
 */
export const ActSubstanceAdminSubstitutionCodeCode = {
  /**
   * equivalent
   */
  equivalent: "E",

  /**
   * equivalent composition
   */
  equivalentcomposition: "EC",

  /**
   * brand composition
   */
  brandcomposition: "BC",

  /**
   * generic composition
   */
  genericcomposition: "G",

  /**
   * therapeutic alternative
   */
  therapeuticalternative: "TE",

  /**
   * therapeutic brand
   */
  therapeuticbrand: "TB",

  /**
   * therapeutic generic
   */
  therapeuticgeneric: "TG",

  /**
   * formulary
   */
  formulary: "F",

  /**
   * none
   */
  none: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActSubstanceAdminSubstitutionCodeCode =
  typeof ActSubstanceAdminSubstitutionCodeCode[keyof typeof ActSubstanceAdminSubstitutionCodeCode];
