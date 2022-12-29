/**
 * Interpretations of change of quantity and/or severity, such as "better", "worse", "increased", etc. At most one of B or W and one of U or D allowed.
 * http://terminology.hl7.org/ValueSet/v3-ObservationInterpretationChange
 */
export const ObservationInterpretationChangeCode = {
  /**
   * Better
   */
  Better: "B",

  /**
   * Significant change down
   */
  Significantchangedown: "D",

  /**
   * Significant change up
   */
  Significantchangeup: "U",

  /**
   * Worse
   */
  Worse: "W",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationInterpretationChangeCode =
  typeof ObservationInterpretationChangeCode[keyof typeof ObservationInterpretationChangeCode];
