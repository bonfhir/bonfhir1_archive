/**
 * **Description:**A genomic phenomenon that is expressed externally in the organism.
 * http://terminology.hl7.org/ValueSet/v3-ActClassPhenotype
 */
export const ActClassPhenotypeCode = {
  /**
   * phenotype
   */
  phenotype: "PHN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassPhenotypeCode =
  typeof ActClassPhenotypeCode[keyof typeof ActClassPhenotypeCode];
