/**
 * **Description:**An observation of genomic phenomena.
 * http://terminology.hl7.org/ValueSet/v3-ActClassGenomicObservation
 */
export const ActClassGenomicObservationCode = {
  /**
   * genomic observation
   */
  GEN: "GEN",

  /**
   * determinant peptide
   */
  DETPOL: "DETPOL",

  /**
   * expression level
   */
  EXP: "EXP",

  /**
   * locus
   */
  LOC: "LOC",

  /**
   * phenotype
   */
  PHN: "PHN",

  /**
   * polypeptide
   */
  POL: "POL",

  /**
   * bio sequence
   */
  SEQ: "SEQ",

  /**
   * bio sequence variation
   */
  SEQVAR: "SEQVAR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassGenomicObservationCode =
  typeof ActClassGenomicObservationCode[keyof typeof ActClassGenomicObservationCode];
