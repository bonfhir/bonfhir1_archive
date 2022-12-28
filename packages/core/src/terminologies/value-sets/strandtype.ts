/**
 * Type for strand.
 * http://hl7.org/fhir/ValueSet/strand-type
 */
export const strandTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type strandTypeCode = typeof strandTypeCode[keyof typeof strandTypeCode];
