/**
 * Observation values that indicate what change in a measurement value or score is indicative of an improvement in the measured item or scored issue.
 * http://hl7.org/fhir/ValueSet/measure-improvement-notation
 */
export const MeasureImprovementNotationCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MeasureImprovementNotationCode =
  typeof MeasureImprovementNotationCode[keyof typeof MeasureImprovementNotationCode];
