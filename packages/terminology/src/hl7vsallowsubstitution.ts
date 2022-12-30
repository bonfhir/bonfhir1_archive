/**
 * Value Set of codes that specify whether substitutions are allowed and, if so, the type of substitutions allowed.
 * http://terminology.hl7.org/ValueSet/v2-0161
 */
export const Hl7VSAllowSubstitutionCode = {
  /**
   * Substitutions are NOT authorized.  (This is the default - null.)
   */
  N: "N",

  /**
   * Allow generic substitutions.
   */
  G: "G",

  /**
   * Allow therapeutic substitutions
   */
  T: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAllowSubstitutionCode =
  typeof Hl7VSAllowSubstitutionCode[keyof typeof Hl7VSAllowSubstitutionCode];
