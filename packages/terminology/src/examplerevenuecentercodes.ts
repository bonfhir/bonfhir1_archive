/**
 * This value set includes sample Revenue Center codes.
 * http://terminology.hl7.org/ValueSet/ex-revenue-center
 */
export const ExampleRevenueCenterCodesCode = {
  /**
   * Vision Clinic
   */
  VisionClinic: "0010",

  /**
   * Dental Clinic
   */
  DentalClinic: "0011",

  /**
   * Emergency
   */
  Emergency: "1001",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleRevenueCenterCodesCode =
  typeof ExampleRevenueCenterCodesCode[keyof typeof ExampleRevenueCenterCodesCode];
