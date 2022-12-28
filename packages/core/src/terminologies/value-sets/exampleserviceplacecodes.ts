/**
 * This value set includes a smattering of Service Place codes.
 * http://hl7.org/fhir/ValueSet/service-place
 */
export const ExampleServicePlaceCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleServicePlaceCodesCode =
  typeof ExampleServicePlaceCodesCode[keyof typeof ExampleServicePlaceCodesCode];
