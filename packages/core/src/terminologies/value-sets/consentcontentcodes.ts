/**
 * This example value set contains all LOINC code
 * http://hl7.org/fhir/ValueSet/consent-content-code
 */
export const ConsentContentCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConsentContentCodesCode =
  typeof ConsentContentCodesCode[keyof typeof ConsentContentCodesCode];
