/**
 * Example use codes for the List resource - typical kinds of use.
 * http://hl7.org/fhir/ValueSet/list-example-codes
 */
export const ExampleUseCodesForListCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleUseCodesForListCode =
  typeof ExampleUseCodesForListCode[keyof typeof ExampleUseCodesForListCode];
