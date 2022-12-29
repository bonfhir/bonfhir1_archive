/**
 * Value Set of codes that specify the basis for marketing approval.
 * http://terminology.hl7.org/ValueSet/v2-0330
 */
export const Hl7VSMarketingBasisCode = {
  /**
   * 510 (K)
   */
  FiveHundredTenK: "510K",

  /**
   * 510 (K) exempt
   */
  FiveHundredTenKexempt: "510E",

  /**
   * Premarketing authorization
   */
  Premarketingauthorization: "PMA",

  /**
   * Preamendment
   */
  Preamendment: "PRE",

  /**
   * Transitional
   */
  Transitional: "TXN",

  /**
   * Post marketing study (522)
   */
  Postmarketingstudy522: "522S",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMarketingBasisCode =
  typeof Hl7VSMarketingBasisCode[keyof typeof Hl7VSMarketingBasisCode];
