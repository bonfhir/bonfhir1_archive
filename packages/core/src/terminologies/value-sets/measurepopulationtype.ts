/**
 * The type of population.
 * http://hl7.org/fhir/ValueSet/measure-population
 */
export const MeasurePopulationTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MeasurePopulationTypeCode =
  typeof MeasurePopulationTypeCode[keyof typeof MeasurePopulationTypeCode];
