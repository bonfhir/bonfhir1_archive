/**
 * Institution
 * http://terminology.hl7.org/ValueSet/v3-Institution
 */
export const InstitutionCode = {
  /**
   * Institution
   */
  I: "I",

  /**
   * community shelter
   */
  CS: "CS",

  /**
   * Group Home
   */
  G: "G",

  /**
   * Nursing Home
   */
  N: "N",

  /**
   * Extended care facility
   */
  X: "X",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InstitutionCode =
  typeof InstitutionCode[keyof typeof InstitutionCode];
