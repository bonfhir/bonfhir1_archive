/**
 * This value set includes sample Revenue Center codes.
 * http://hl7.org/fhir/ValueSet/ex-revenue-center
 */
export const ExampleRevenueCenterCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleRevenueCenterCodesCode =
  typeof ExampleRevenueCenterCodesCode[keyof typeof ExampleRevenueCenterCodesCode];
