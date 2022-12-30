/**
 * Transfer of ownership for a product.
 * http://terminology.hl7.org/ValueSet/v3-Transfer
 */
export const TransferCode = {
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
export type TransferCode = typeof TransferCode[keyof typeof TransferCode];
