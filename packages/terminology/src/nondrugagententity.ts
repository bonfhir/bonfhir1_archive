/**
 * Indicates types of allergy and intolerance agents which are non-drugs. (E.g. foods, latex, etc.)
 * http://terminology.hl7.org/ValueSet/v3-NonDrugAgentEntity
 */
export const NonDrugAgentEntityCode = {
  /**
   * egg
   */
  NDA01: "NDA01",

  /**
   * fish
   */
  NDA02: "NDA02",

  /**
   * lactose
   */
  NDA03: "NDA03",

  /**
   * peanut
   */
  NDA04: "NDA04",

  /**
   * soy
   */
  NDA05: "NDA05",

  /**
   * sulfites
   */
  NDA06: "NDA06",

  /**
   * wheat or gluten
   */
  NDA07: "NDA07",

  /**
   * isocyanates
   */
  NDA08: "NDA08",

  /**
   * solvents
   */
  NDA09: "NDA09",

  /**
   * oils
   */
  NDA10: "NDA10",

  /**
   * venoms
   */
  NDA11: "NDA11",

  /**
   * latex
   */
  NDA12: "NDA12",

  /**
   * shellfish
   */
  NDA13: "NDA13",

  /**
   * strawberries
   */
  NDA14: "NDA14",

  /**
   * tomatoes
   */
  NDA15: "NDA15",

  /**
   * dust
   */
  NDA16: "NDA16",

  /**
   * dust mites
   */
  NDA17: "NDA17",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NonDrugAgentEntityCode =
  typeof NonDrugAgentEntityCode[keyof typeof NonDrugAgentEntityCode];
