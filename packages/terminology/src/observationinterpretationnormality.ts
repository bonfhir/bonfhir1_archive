/**
 * Interpretation of normality or degree of abnormality (including critical or "alert" level). Concepts in this category are mutually exclusive, i.e., at most one is allowed.
 * http://terminology.hl7.org/ValueSet/v3-ObservationInterpretationNormality
 */
export const ObservationInterpretationNormalityCode = {
  /**
   * Abnormal
   */
  Abnormal: "A",

  /**
   * Critical abnormal
   */
  Criticalabnormal: "AA",

  /**
   * Critical high
   */
  Criticalhigh: "HH",

  /**
   * Critical low
   */
  Criticallow: "LL",

  /**
   * High
   */
  High: "H",

  /**
   * Significantly high
   */
  Significantlyhigh: "H>",

  /**
   * Significantly high
   */
  Significantlyhigh: "HU",

  /**
   * Low
   */
  Low: "L",

  /**
   * Significantly low
   */
  Significantlylow: "L<",

  /**
   * Significantly low
   */
  Significantlylow: "LU",

  /**
   * Normal
   */
  Normal: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationInterpretationNormalityCode =
  typeof ObservationInterpretationNormalityCode[keyof typeof ObservationInterpretationNormalityCode];
