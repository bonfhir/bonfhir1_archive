/**
 * Value Set of codes that describes the status of product evaluation.
 * http://terminology.hl7.org/ValueSet/v2-0247
 */
export const Hl7VSStartOfEvaluationCode = {
  /**
   * Evaluation completed
   */
  Y: "Y",

  /**
   * Evaluation in progress
   */
  P: "P",

  /**
   * Problem already known, no evaluation necessary
   */
  K: "K",

  /**
   * Product not made by company
   */
  X: "X",

  /**
   * Evaluation anticipated, but not yet begun
   */
  A: "A",

  /**
   * Product discarded -- unable to follow up
   */
  D: "D",

  /**
   * Product received in condition which made analysis impossible
   */
  C: "C",

  /**
   * Product remains implanted -- unable to follow up
   */
  I: "I",

  /**
   * Product unavailable for follow up investigation
   */
  U: "U",

  /**
   * Product under quarantine -- unable to follow up
   */
  Q: "Q",

  /**
   * Product under recall/corrective action
   */
  R: "R",

  /**
   * Other
   */
  O: "O",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSStartOfEvaluationCode =
  typeof Hl7VSStartOfEvaluationCode[keyof typeof Hl7VSStartOfEvaluationCode];
