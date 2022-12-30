/**
 * Interpretation of degree of abnormality (including critical or "alert" level). Concepts in this category are mutually exclusive, i.e., at most one is allowed.
 * http://terminology.hl7.org/ValueSet/v3-ObservationInterpretationNormalityAbnormal
 */
export const ObservationInterpretationNormalityAbnormalCode = {
  /**
   * Abnormal
   */
  A: "A",

  /**
   * Critical abnormal
   */
  AA: "AA",

  /**
   * Critical high
   */
  HH: "HH",

  /**
   * Critical low
   */
  LL: "LL",

  /**
   * High
   */
  H: "H",

  /**
   * Significantly high
   */
  "H>": "H>",

  /**
   * Significantly high
   */
  HU: "HU",

  /**
   * Low
   */
  L: "L",

  /**
   * Significantly low
   */
  "L<": "L<",

  /**
   * Significantly low
   */
  LU: "LU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationInterpretationNormalityAbnormalCode =
  typeof ObservationInterpretationNormalityAbnormalCode[keyof typeof ObservationInterpretationNormalityAbnormalCode];
