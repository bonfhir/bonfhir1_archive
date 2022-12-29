/**
 * EnteralFormulaAdditiveType: Codes for the type of modular component such as protein, carbohydrate or fiber to be provided in addition to or mixed with the base formula. This value set is provided as a suggestive example.
 * http://terminology.hl7.org/ValueSet/entformula-additive
 */
export const EnteralFormulaAdditiveTypeCodeCode = {
  /**
   * Lipid
   */
  Lipid: "lipid",

  /**
   * Protein
   */
  Protein: "protein",

  /**
   * Carbohydrate
   */
  Carbohydrate: "carbohydrate",

  /**
   * Fiber
   */
  Fiber: "fiber",

  /**
   * Water
   */
  Water: "water",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EnteralFormulaAdditiveTypeCodeCode =
  typeof EnteralFormulaAdditiveTypeCodeCode[keyof typeof EnteralFormulaAdditiveTypeCodeCode];
