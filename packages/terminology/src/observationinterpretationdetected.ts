/**
 * Interpretations of the presence or absence of a component / analyte or organism in a test or of a sign in a clinical observation. In keeping with laboratory data processing practice, these concepts provide a categorical interpretation of the "meaning" of the quantitative value for the same observation.
 * http://terminology.hl7.org/ValueSet/v3-ObservationInterpretationDetected
 */
export const ObservationInterpretationDetectedCode = {
  /**
   * ObservationInterpretationDetection
   */
  ObservationInterpretationDetection: "ObservationInterpretationDetection",

  /**
   * Indeterminate
   */
  Indeterminate: "IND",

  /**
   * Equivocal
   */
  Equivocal: "E",

  /**
   * Negative
   */
  Negative: "NEG",

  /**
   * Not detected
   */
  Notdetected: "ND",

  /**
   * Positive
   */
  Positive: "POS",

  /**
   * Detected
   */
  Detected: "DET",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationInterpretationDetectedCode =
  typeof ObservationInterpretationDetectedCode[keyof typeof ObservationInterpretationDetectedCode];
