/**
 * Indicates types of allergy and intolerance agents which are non-drugs. (E.g. foods, latex, etc.)
 * http://terminology.hl7.org/ValueSet/v3-NonDrugAgentEntity
 */
export const NonDrugAgentEntityCode = {
  /**
   * egg
   */
  egg: "NDA01",

  /**
   * fish
   */
  fish: "NDA02",

  /**
   * lactose
   */
  lactose: "NDA03",

  /**
   * peanut
   */
  peanut: "NDA04",

  /**
   * soy
   */
  soy: "NDA05",

  /**
   * sulfites
   */
  sulfites: "NDA06",

  /**
   * wheat or gluten
   */
  wheatorgluten: "NDA07",

  /**
   * isocyanates
   */
  isocyanates: "NDA08",

  /**
   * solvents
   */
  solvents: "NDA09",

  /**
   * oils
   */
  oils: "NDA10",

  /**
   * venoms
   */
  venoms: "NDA11",

  /**
   * latex
   */
  latex: "NDA12",

  /**
   * shellfish
   */
  shellfish: "NDA13",

  /**
   * strawberries
   */
  strawberries: "NDA14",

  /**
   * tomatoes
   */
  tomatoes: "NDA15",

  /**
   * dust
   */
  dust: "NDA16",

  /**
   * dust mites
   */
  dustmites: "NDA17",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NonDrugAgentEntityCode =
  typeof NonDrugAgentEntityCode[keyof typeof NonDrugAgentEntityCode];
