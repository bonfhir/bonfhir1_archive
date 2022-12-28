/**
 * **Description:**An observation of genomic phenomena.
 * http://terminology.hl7.org/ValueSet/v3-ActClassGenomicObservation
 */
export const ActClassGenomicObservationCode = {
  /**
   * genomic observation
   */
  GEN: "GEN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassGenomicObservationCode =
  typeof ActClassGenomicObservationCode[keyof typeof ActClassGenomicObservationCode];
