/**
 * Chromosome number for human.
 * http://hl7.org/fhir/ValueSet/chromosome-human
 */
export const chromosomehumanCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type chromosomehumanCode =
  typeof chromosomehumanCode[keyof typeof chromosomehumanCode];
