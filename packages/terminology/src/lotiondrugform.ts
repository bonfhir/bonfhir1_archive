/**
 * The term "lotion" has been used to categorize many topical suspensions, solutions and emulsions intended for application to the skin.
 * http://terminology.hl7.org/ValueSet/v3-LotionDrugForm
 */
export const LotionDrugFormCode = {
  /**
   * Lotion
   */
  Lotion: "LTN",

  /**
   * Topical Lotion
   */
  TopicalLotion: "TOPLTN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LotionDrugFormCode =
  typeof LotionDrugFormCode[keyof typeof LotionDrugFormCode];
