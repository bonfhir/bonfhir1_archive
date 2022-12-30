/**
 * Interpretation for a quantitative observation of degree of abnormality (including critical or "alert" level) below the lower limit of the reference range.
 * http://terminology.hl7.org/ValueSet/v3-ObservationInterpretationNormalityLow
 */
export const ObservationInterpretationNormalityLowCode = {
  /**
   * Low
   */
  L: "L",

  /**
   * Significantly low
   */
  "L<": "L<",

  /**
   * Critical low
   */
  LL: "LL",

  /**
   * Significantly low
   */
  LU: "LU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationInterpretationNormalityLowCode =
  typeof ObservationInterpretationNormalityLowCode[keyof typeof ObservationInterpretationNormalityLowCode];
