/**
 * This value set includes Coverage SelfPay codes.
 * http://terminology.hl7.org/ValueSet/coverage-selfpay
 */
export const CoverageSelfPayCodesCode = {
  /**
   * Pay
   */
  pay: "pay",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CoverageSelfPayCodesCode =
  typeof CoverageSelfPayCodesCode[keyof typeof CoverageSelfPayCodesCode];
