/**
 * The method that a product is obtained for use by the subject of the supply act (e.g. patient), with financial compensation. Product examples are consumable or durable goods.
 * http://terminology.hl7.org/ValueSet/v3-xActFinancialProductAcquisitionCode
 */
export const XActFinancialProductAcquisitionCodeCode = {
  /**
   * Rent
   */
  RENT: "RENT",

  /**
   * Sale
   */
  SALE: "SALE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActFinancialProductAcquisitionCodeCode =
  typeof XActFinancialProductAcquisitionCodeCode[keyof typeof XActFinancialProductAcquisitionCodeCode];
