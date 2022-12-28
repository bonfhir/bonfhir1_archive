/**
 * This value set includes sample Revenue Center codes.
 * http://terminology.hl7.org/ValueSet/ex-revenue-center
 */
export const ExampleRevenueCenterCodesCode = {
  /**
   * Vision Clinic
   */
  "0010": "0010",

  /**
   * Dental Clinic
   */
  "0011": "0011",

  /**
   * Emergency
   */
  "1001": "1001",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleRevenueCenterCodesCode =
  typeof ExampleRevenueCenterCodesCode[keyof typeof ExampleRevenueCenterCodesCode];
