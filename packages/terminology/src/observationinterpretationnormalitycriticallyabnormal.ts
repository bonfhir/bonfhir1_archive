/**
 * Interpretation of a critical (or "alert") degree of abnormality. Concepts in this category are mutually exclusive, i.e., at most one is allowed.
 * http://terminology.hl7.org/ValueSet/v3-ObservationInterpretationNormalityCriticallyAbnormal
 */
export const ObservationInterpretationNormalityCriticallyAbnormalCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationInterpretationNormalityCriticallyAbnormalCode =
  typeof ObservationInterpretationNormalityCriticallyAbnormalCode[keyof typeof ObservationInterpretationNormalityCriticallyAbnormalCode];
