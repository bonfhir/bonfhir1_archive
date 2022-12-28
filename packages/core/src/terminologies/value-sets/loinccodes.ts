/**
 * This value set includes all LOINC codes
 * http://hl7.org/fhir/ValueSet/observation-codes
 */
export const LOINCCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LOINCCodesCode = typeof LOINCCodesCode[keyof typeof LOINCCodesCode];
