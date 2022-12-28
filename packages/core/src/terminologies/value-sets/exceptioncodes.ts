/**
 * This value set includes sample Exception codes.
 * http://hl7.org/fhir/ValueSet/claim-exception
 */
export const ExceptionCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExceptionCodesCode =
  typeof ExceptionCodesCode[keyof typeof ExceptionCodesCode];
