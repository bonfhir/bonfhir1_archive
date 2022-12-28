/**
 * Value Set of codes that specify  classification of general allergy categories (drug, food, pollen, etc.).
 * http://terminology.hl7.org/ValueSet/v2-0127
 */
export const Hl7VSAllergyTypeCode = {
  /**
   * Drug allergy
   */
  DA: "DA",

  /**
   * Food allergy
   */
  FA: "FA",

  /**
   * Miscellaneous allergy
   */
  MA: "MA",

  /**
   * Miscellaneous contraindication
   */
  MC: "MC",

  /**
   * Environmental Allergy
   */
  EA: "EA",

  /**
   * Animal Allergy
   */
  AA: "AA",

  /**
   * Plant Allergy
   */
  PA: "PA",

  /**
   * Pollen Allergy
   */
  LA: "LA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAllergyTypeCode =
  typeof Hl7VSAllergyTypeCode[keyof typeof Hl7VSAllergyTypeCode];
