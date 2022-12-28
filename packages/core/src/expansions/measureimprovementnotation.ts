/**
 * Observation values that indicate what change in a measurement value or score is indicative of an improvement in the measured item or scored issue.
 * http://terminology.hl7.org/ValueSet/measure-improvement-notation
 */
export const MeasureImprovementNotationCode = {
  /**
   * Increased score indicates improvement
   */
  increase: "increase",

  /**
   * Decreased score indicates improvement
   */
  decrease: "decrease",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MeasureImprovementNotationCode =
  typeof MeasureImprovementNotationCode[keyof typeof MeasureImprovementNotationCode];
