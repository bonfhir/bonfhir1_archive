/**
 * HGNC: Human Gene Nomenclature Committee
 * http://hl7.org/fhir/ValueSet/genenames
 */
export const HGNCCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HGNCCode = typeof HGNCCode[keyof typeof HGNCCode];
