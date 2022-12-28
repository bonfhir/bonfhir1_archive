/**
 * Interpretation for a quantitative observation of degree of abnormality (including critical or "alert" level) above the upper limit of the reference range.
 * http://terminology.hl7.org/ValueSet/v3-ObservationInterpretationNormalityHigh
 */
export const ObservationInterpretationNormalityHighCode = {
  /**
   * High
   */
  H: "H",

  /**
   * Significantly high
   */
  "H>": "H>",

  /**
   * Critical high
   */
  HH: "HH",

  /**
   * Significantly high
   */
  HU: "HU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationInterpretationNormalityHighCode =
  typeof ObservationInterpretationNormalityHighCode[keyof typeof ObservationInterpretationNormalityHighCode];
