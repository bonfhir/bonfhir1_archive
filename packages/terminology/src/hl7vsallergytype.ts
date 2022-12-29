/**
 * Value Set of codes that specify  classification of general allergy categories (drug, food, pollen, etc.).
 * http://terminology.hl7.org/ValueSet/v2-0127
 */
export const Hl7VSAllergyTypeCode = {
  /**
   * Drug allergy
   */
  Drugallergy: "DA",

  /**
   * Food allergy
   */
  Foodallergy: "FA",

  /**
   * Miscellaneous allergy
   */
  Miscellaneousallergy: "MA",

  /**
   * Miscellaneous contraindication
   */
  Miscellaneouscontraindication: "MC",

  /**
   * Environmental Allergy
   */
  EnvironmentalAllergy: "EA",

  /**
   * Animal Allergy
   */
  AnimalAllergy: "AA",

  /**
   * Plant Allergy
   */
  PlantAllergy: "PA",

  /**
   * Pollen Allergy
   */
  PollenAllergy: "LA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAllergyTypeCode =
  typeof Hl7VSAllergyTypeCode[keyof typeof Hl7VSAllergyTypeCode];
