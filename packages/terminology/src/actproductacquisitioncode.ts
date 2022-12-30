/**
 * The method that a product is obtained for use by the subject of the supply act (e.g. patient). Product examples are consumable or durable goods.
 * http://terminology.hl7.org/ValueSet/v3-ActProductAcquisitionCode
 */
export const ActProductAcquisitionCodeCode = {
  /**
   * Loan
   */
  LOAN: "LOAN",

  /**
   * Rent
   */
  RENT: "RENT",

  /**
   * Transfer
   */
  TRANSFER: "TRANSFER",

  /**
   * Sale
   */
  SALE: "SALE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActProductAcquisitionCodeCode =
  typeof ActProductAcquisitionCodeCode[keyof typeof ActProductAcquisitionCodeCode];
