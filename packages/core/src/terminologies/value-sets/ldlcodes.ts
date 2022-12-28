/**
 * LDL Cholesterol codes - measured or calculated
 * http://hl7.org/fhir/ValueSet/lipid-ldl-codes
 */
export const LDLCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LDLCodesCode = typeof LDLCodesCode[keyof typeof LDLCodesCode];
