/**
 * This value set includes sample Consent Action codes.
 * http://hl7.org/fhir/ValueSet/consent-action
 */
export const ConsentActionCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConsentActionCodesCode =
  typeof ConsentActionCodesCode[keyof typeof ConsentActionCodesCode];
