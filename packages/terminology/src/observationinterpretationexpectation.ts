/**
 * Observation interpretation codes for expected results based on additional information (contraindicators) about the patient's situation.
 * http://terminology.hl7.org/ValueSet/v3-ObservationInterpretationExpectation
 */
export const ObservationInterpretationExpectationCode = {
  /**
   * Expected
   */
  EXP: "EXP",

  /**
   * Unexpected
   */
  UNE: "UNE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationInterpretationExpectationCode =
  typeof ObservationInterpretationExpectationCode[keyof typeof ObservationInterpretationExpectationCode];
