/**
 * Example Measure Groups for the Measure Resource.
 * http://hl7.org/fhir/ValueSet/measure-group-example
 */
export const MeasureGroupExampleCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MeasureGroupExampleCode =
  typeof MeasureGroupExampleCode[keyof typeof MeasureGroupExampleCode];
