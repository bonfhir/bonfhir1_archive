/**
 * A code that provides additional detail about the means or technique used to ascertain the genetic analysis. Example, PCR, Micro Array
 * http://terminology.hl7.org/ValueSet/v3-GeneticObservationMethod
 */
export const GeneticObservationMethodCode = {
  /**
   * GeneticObservationMethod
   */
  _GeneticObservationMethod: "_GeneticObservationMethod",

  /**
   * PCR
   */
  PCR: "PCR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GeneticObservationMethodCode =
  typeof GeneticObservationMethodCode[keyof typeof GeneticObservationMethodCode];
