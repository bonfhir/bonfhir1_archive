/**
 * The intended usage for supplemental data elements in the measure.
 * http://hl7.org/fhir/ValueSet/measure-data-usage
 */
export const MeasureDataUsageCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MeasureDataUsageCode =
  typeof MeasureDataUsageCode[keyof typeof MeasureDataUsageCode];
