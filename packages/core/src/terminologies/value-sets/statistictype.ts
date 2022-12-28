/**
 * The type of a statistic, e.g. relative risk or mean
 * http://hl7.org/fhir/ValueSet/statistic-type
 */
export const StatisticTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StatisticTypeCode =
  typeof StatisticTypeCode[keyof typeof StatisticTypeCode];
