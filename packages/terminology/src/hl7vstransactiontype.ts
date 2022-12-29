/**
 * Value Set of codes that specify a type of financial transaction.
 * http://terminology.hl7.org/ValueSet/v2-0017
 */
export const Hl7VSTransactionTypeCode = {
  /**
   * Charge
   */
  Charge: "CG",

  /**
   * Credit
   */
  Credit: "CD",

  /**
   * Payment
   */
  Payment: "PY",

  /**
   * Adjustment
   */
  Adjustment: "AJ",

  /**
   * Co-payment
   */
  Copayment: "CO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTransactionTypeCode =
  typeof Hl7VSTransactionTypeCode[keyof typeof Hl7VSTransactionTypeCode];
