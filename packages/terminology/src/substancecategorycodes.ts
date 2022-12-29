/**
 * Substance category codes
 * http://terminology.hl7.org/ValueSet/substance-category
 */
export const SubstanceCategoryCodesCode = {
  /**
   * Allergen
   */
  Allergen: "allergen",

  /**
   * Biological Substance
   */
  BiologicalSubstance: "biological",

  /**
   * Body Substance
   */
  BodySubstance: "body",

  /**
   * Chemical
   */
  Chemical: "chemical",

  /**
   * Dietary Substance
   */
  DietarySubstance: "food",

  /**
   * Drug or Medicament
   */
  DrugorMedicament: "drug",

  /**
   * Material
   */
  Material: "material",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubstanceCategoryCodesCode =
  typeof SubstanceCategoryCodesCode[keyof typeof SubstanceCategoryCodesCode];
