/**
 * Value Set of codes used to specify the reason for this adjustment.
 * http://terminology.hl7.org/ValueSet/v2-0565
 */
export const Hl7VSProviderAdjustmentReasonCodeCode = {
  /**
   * Provincial Sales Tax
   */
  PST: "PST",

  /**
   * Goods and Services Tax
   */
  GST: "GST",

  /**
   * Harmonized Sales Tax
   */
  HST: "HST",

  /**
   * Dispensing Fee
   */
  DISP: "DISP",

  /**
   * Mark up Fee
   */
  MKUP: "MKUP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProviderAdjustmentReasonCodeCode =
  typeof Hl7VSProviderAdjustmentReasonCodeCode[keyof typeof Hl7VSProviderAdjustmentReasonCodeCode];
