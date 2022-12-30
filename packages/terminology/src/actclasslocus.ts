/**
 * **Description:**The position of a gene (or other significant sequence) on the genome.
 * http://terminology.hl7.org/ValueSet/v3-ActClassLocus
 */
export const ActClassLocusCode = {
  /**
   * locus
   */
  LOC: "LOC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassLocusCode =
  typeof ActClassLocusCode[keyof typeof ActClassLocusCode];
