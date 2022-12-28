/**
 * **Description:** Identifies the kinds of genetic observations that can be performed.
 * http://terminology.hl7.org/ValueSet/v3-GeneticObservationType
 */
export const GeneticObservationTypeCode = {
  /**
   * GeneticObservationType
   */
  _GeneticObservationType: "_GeneticObservationType",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GeneticObservationTypeCode =
  typeof GeneticObservationTypeCode[keyof typeof GeneticObservationTypeCode];
