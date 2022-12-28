/**
 * This value set includes the four Consent scope codes.
 * http://hl7.org/fhir/ValueSet/consent-scope
 */
export const ConsentScopeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConsentScopeCodesCode =
  typeof ConsentScopeCodesCode[keyof typeof ConsentScopeCodesCode];
