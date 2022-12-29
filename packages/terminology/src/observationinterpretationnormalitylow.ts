/**
 * Interpretation for a quantitative observation of degree of abnormality (including critical or "alert" level) below the lower limit of the reference range.
 * http://terminology.hl7.org/ValueSet/v3-ObservationInterpretationNormalityLow
 */
export const ObservationInterpretationNormalityLowCode = {
  /**
   * Low
   */
  Low: "L",

  /**
   * Significantly low
   */
  Significantlylow: "L<",

  /**
   * Critical low
   */
  Criticallow: "LL",

  /**
   * Significantly low
   */
  Significantlylow: "LU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationInterpretationNormalityLowCode =
  typeof ObservationInterpretationNormalityLowCode[keyof typeof ObservationInterpretationNormalityLowCode];
