/**
 * Concepts which specify observation result status. These codes reflect the current completion status of the results for one Observation Identifier.
 * http://terminology.hl7.org/ValueSet/v2-0085
 */
export const Hl7VSObservationResultStatusCode = {
  /**
   * Amended based on adjustments provided by the Placer (Physician) regarding patient demographics (such as age and/or gender or other patient specific information
   */
  A: "A",

  /**
   * Appended Report - Final results reviewed and further information provided for clarity without change to the original result values.
   */
  B: "B",

  /**
   * Record coming over is a correction and thus replaces a final result
   */
  C: "C",

  /**
   * Deletes the OBX record
   */
  D: "D",

  /**
   * Final results
   */
  F: "F",

  /**
   * Specimen in lab; results pending
   */
  I: "I",

  /**
   * Not asked; used to affirmatively document that the observation identified in the OBX was not sought when the universal service ID in OBR-4 implies that it would be sought.
   */
  N: "N",

  /**
   * Order detail description only (no result)
   */
  O: "O",

  /**
   * Preliminary results
   */
  P: "P",

  /**
   * Results entered -- not verified
   */
  R: "R",

  /**
   * Partial results.   Deprecated. Retained only for backward compatibility as of V2.6.
   */
  S: "S",

  /**
   * Verified - Final results reviewed and confirmed to be correct, no change to result value, normal range or abnormal flag
   */
  V: "V",

  /**
   * Results cannot be obtained for this observation
   */
  X: "X",

  /**
   * Results status change to final without retransmitting results already sent as 'preliminary.'  E.g., radiology changes status from preliminary to final
   */
  U: "U",

  /**
   * Post original as wrong, e.g., transmitted for wrong patient
   */
  W: "W",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSObservationResultStatusCode =
  typeof Hl7VSObservationResultStatusCode[keyof typeof Hl7VSObservationResultStatusCode];
