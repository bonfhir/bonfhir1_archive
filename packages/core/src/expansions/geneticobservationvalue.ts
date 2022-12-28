/**
 * **Description:** The domain contains genetic analysis specific observation values, e.g. Homozygote, Heterozygote, etc.
 * http://terminology.hl7.org/ValueSet/v3-GeneticObservationValue
 */
export const GeneticObservationValueCode = {
  /**
   * GeneticObservationValue
   */
  _GeneticObservationValue: "_GeneticObservationValue",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GeneticObservationValueCode =
  typeof GeneticObservationValueCode[keyof typeof GeneticObservationValueCode];
