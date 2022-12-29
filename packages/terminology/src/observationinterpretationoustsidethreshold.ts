/**
 * The observation/test result is interpreted as being outside the inclusion range for a particular protocol within which the result is being reported.

**Example:** A positive result on a Hepatitis screening test.

*Open Issue:* We are not deprecating this value set at this time, but instead are leaving open the consideration of deprecation in the future. \[Note: The concepts included in this value set have also been suggested for future deprecation, and there are no associated concept subdomains or bindings. Note also that the name of the value set appears to have a typo in it from the old cycle when it was originally added.\]
 * http://terminology.hl7.org/ValueSet/v3-ObservationInterpretationOustsideThreshold
 */
export const ObservationInterpretationOustsideThresholdCode = {
  /**
   * outside threshold
   */
  outsidethreshold: "EX",

  /**
   * above high threshold
   */
  abovehighthreshold: "HX",

  /**
   * below low threshold
   */
  belowlowthreshold: "LX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationInterpretationOustsideThresholdCode =
  typeof ObservationInterpretationOustsideThresholdCode[keyof typeof ObservationInterpretationOustsideThresholdCode];
