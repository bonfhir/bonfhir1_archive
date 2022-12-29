/**
 * Codes that specify interpretation of genetic analysis, such as "positive", "negative", "carrier", "responsive", etc.
 * http://terminology.hl7.org/ValueSet/v3-GeneticObservationInterpretation
 */
export const GeneticObservationInterpretationCode = {
  /**
   * GeneticObservationInterpretation
   */
  GeneticObservationInterpretation: "_GeneticObservationInterpretation",

  /**
   * Carrier
   */
  Carrier: "CAR",

  /**
   * Carrier
   */
  Carrier: "Carrier",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GeneticObservationInterpretationCode =
  typeof GeneticObservationInterpretationCode[keyof typeof GeneticObservationInterpretationCode];
