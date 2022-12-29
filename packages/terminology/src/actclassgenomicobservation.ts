/**
 * **Description:**An observation of genomic phenomena.
 * http://terminology.hl7.org/ValueSet/v3-ActClassGenomicObservation
 */
export const ActClassGenomicObservationCode = {
  /**
   * genomic observation
   */
  genomicobservation: "GEN",

  /**
   * determinant peptide
   */
  determinantpeptide: "DETPOL",

  /**
   * expression level
   */
  expressionlevel: "EXP",

  /**
   * locus
   */
  locus: "LOC",

  /**
   * phenotype
   */
  phenotype: "PHN",

  /**
   * polypeptide
   */
  polypeptide: "POL",

  /**
   * bio sequence
   */
  biosequence: "SEQ",

  /**
   * bio sequence variation
   */
  biosequencevariation: "SEQVAR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassGenomicObservationCode =
  typeof ActClassGenomicObservationCode[keyof typeof ActClassGenomicObservationCode];
