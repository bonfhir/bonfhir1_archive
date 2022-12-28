/**
 * Interpretations of change of quantity and/or severity, such as "better", "worse", "increased", etc. At most one of B or W and one of U or D allowed.
 * http://terminology.hl7.org/ValueSet/v3-ObservationInterpretationChange
 */
export const ObservationInterpretationChangeCode = {
  /**
   * Better
   */
  B: "B",

  /**
   * Significant change down
   */
  D: "D",

  /**
   * Significant change up
   */
  U: "U",

  /**
   * Worse
   */
  W: "W",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationInterpretationChangeCode =
  typeof ObservationInterpretationChangeCode[keyof typeof ObservationInterpretationChangeCode];
