/**
 * Value Set of codes used to specify the reason for this adjustment.
 * http://terminology.hl7.org/ValueSet/v2-0565
 */
export const Hl7VSProviderAdjustmentReasonCodeCode = {
  /**
   * Provincial Sales Tax
   */
  ProvincialSalesTax: "PST",

  /**
   * Goods and Services Tax
   */
  GoodsandServicesTax: "GST",

  /**
   * Harmonized Sales Tax
   */
  HarmonizedSalesTax: "HST",

  /**
   * Dispensing Fee
   */
  DispensingFee: "DISP",

  /**
   * Mark up Fee
   */
  MarkupFee: "MKUP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProviderAdjustmentReasonCodeCode =
  typeof Hl7VSProviderAdjustmentReasonCodeCode[keyof typeof Hl7VSProviderAdjustmentReasonCodeCode];
