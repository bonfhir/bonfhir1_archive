/**
 * European Bioinformatics Institute
 * http://hl7.org/fhir/ValueSet/allelename
 */
export const HLACode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HLACode = typeof HLACode[keyof typeof HLACode];
