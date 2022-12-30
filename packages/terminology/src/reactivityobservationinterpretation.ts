/**
 * Interpretations of the presence and level of reactivity of the specified component / analyte with the reagent in the performed laboratory test.
 * http://terminology.hl7.org/ValueSet/v3-ReactivityObservationInterpretation
 */
export const ReactivityObservationInterpretationCode = {
  /**
   * ReactivityObservationInterpretation
   */
  ReactivityObservationInterpretation: "ReactivityObservationInterpretation",

  /**
   * Non-reactive
   */
  NR: "NR",

  /**
   * Reactive
   */
  RR: "RR",

  /**
   * Weakly reactive
   */
  WR: "WR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ReactivityObservationInterpretationCode =
  typeof ReactivityObservationInterpretationCode[keyof typeof ReactivityObservationInterpretationCode];
