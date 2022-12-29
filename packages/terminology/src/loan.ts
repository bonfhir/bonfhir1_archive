/**
 * Temporary supply of a product without transfer of ownership for the product.
 * http://terminology.hl7.org/ValueSet/v3-Loan
 */
export const LoanCode = {
  /**
   * Loan
   */
  Loan: "LOAN",

  /**
   * Rent
   */
  Rent: "RENT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LoanCode = typeof LoanCode[keyof typeof LoanCode];
