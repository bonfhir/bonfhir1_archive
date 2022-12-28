/**
 * Codes that specify interpretation of genetic analysis, such as "positive", "negative", "carrier", "responsive", etc.
 * http://terminology.hl7.org/ValueSet/v3-GeneticObservationInterpretation
 */
export const GeneticObservationInterpretationCode = {
  /**
   * GeneticObservationInterpretation
   */
  _GeneticObservationInterpretation: "_GeneticObservationInterpretation",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GeneticObservationInterpretationCode =
  typeof GeneticObservationInterpretationCode[keyof typeof GeneticObservationInterpretationCode];
