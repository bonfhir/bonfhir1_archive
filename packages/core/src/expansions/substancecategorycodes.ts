/**
 * Substance category codes
 * http://terminology.hl7.org/ValueSet/substance-category
 */
export const SubstanceCategoryCodesCode = {
  /**
   * Allergen
   */
  allergen: "allergen",

  /**
   * Biological Substance
   */
  biological: "biological",

  /**
   * Body Substance
   */
  body: "body",

  /**
   * Chemical
   */
  chemical: "chemical",

  /**
   * Dietary Substance
   */
  food: "food",

  /**
   * Drug or Medicament
   */
  drug: "drug",

  /**
   * Material
   */
  material: "material",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubstanceCategoryCodesCode =
  typeof SubstanceCategoryCodesCode[keyof typeof SubstanceCategoryCodesCode];
