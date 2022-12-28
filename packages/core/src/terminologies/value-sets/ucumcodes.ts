/**
 * Unified Code for Units of Measure (UCUM). This value set includes all UCUM codes
 * http://hl7.org/fhir/ValueSet/ucum-units
 */
export const UCUMCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UCUMCodesCode = typeof UCUMCodesCode[keyof typeof UCUMCodesCode];
