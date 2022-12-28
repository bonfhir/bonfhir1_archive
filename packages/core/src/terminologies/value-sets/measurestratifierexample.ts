/**
 * Identifier subgroups in a population for measuring purposes.
 * http://hl7.org/fhir/ValueSet/measure-stratifier-example
 */
export const MeasureStratifierExampleCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MeasureStratifierExampleCode =
  typeof MeasureStratifierExampleCode[keyof typeof MeasureStratifierExampleCode];
