/**
 * Value Set of codes that specify the basis for marketing approval.
 * http://terminology.hl7.org/ValueSet/v2-0330
 */
export const Hl7VSMarketingBasisCode = {
  /**
   * 510 (K)
   */
  "510K": "510K",

  /**
   * 510 (K) exempt
   */
  "510E": "510E",

  /**
   * Premarketing authorization
   */
  PMA: "PMA",

  /**
   * Preamendment
   */
  PRE: "PRE",

  /**
   * Transitional
   */
  TXN: "TXN",

  /**
   * Post marketing study (522)
   */
  "522S": "522S",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMarketingBasisCode =
  typeof Hl7VSMarketingBasisCode[keyof typeof Hl7VSMarketingBasisCode];
