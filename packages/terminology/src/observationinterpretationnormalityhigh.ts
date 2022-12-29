/**
 * Interpretation for a quantitative observation of degree of abnormality (including critical or "alert" level) above the upper limit of the reference range.
 * http://terminology.hl7.org/ValueSet/v3-ObservationInterpretationNormalityHigh
 */
export const ObservationInterpretationNormalityHighCode = {
  /**
   * High
   */
  High: "H",

  /**
   * Significantly high
   */
  Significantlyhigh: "H>",

  /**
   * Critical high
   */
  Criticalhigh: "HH",

  /**
   * Significantly high
   */
  Significantlyhigh: "HU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationInterpretationNormalityHighCode =
  typeof ObservationInterpretationNormalityHighCode[keyof typeof ObservationInterpretationNormalityHighCode];
