/**
 * Value Set of codes that specify the interpretation for the blood product observation status codes.  A status is considered preliminary until a blood product has reached a final disposition for the patient. For example, when the product is first c
 * http://terminology.hl7.org/ValueSet/v2-0511
 */
export const Hl7VSBpObservationStatusCodesInterpretationCode = {
  /**
   * Record coming over is a correction and thus replaces a final status
   */
  C: "C",

  /**
   * Deletes the BPX record
   */
  D: "D",

  /**
   * Final status; Can only be changed with a corrected status
   */
  F: "F",

  /**
   * Order detail description only (no status)
   */
  O: "O",

  /**
   * Preliminary status
   */
  P: "P",

  /**
   * Post original as wrong, e.g., transmitted for wrong patient
   */
  W: "W",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSBpObservationStatusCodesInterpretationCode =
  typeof Hl7VSBpObservationStatusCodesInterpretationCode[keyof typeof Hl7VSBpObservationStatusCodesInterpretationCode];
