/**
 * Codes indicating types of statistics that can be returned
 * http://hl7.org/fhir/ValueSet/observation-statistics
 */
export const StatisticsCodeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StatisticsCodeCode =
  typeof StatisticsCodeCode[keyof typeof StatisticsCodeCode];
