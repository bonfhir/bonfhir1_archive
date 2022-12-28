/**
 * The handling of the variable in statistical analysis for exposures or outcomes.
 * http://hl7.org/fhir/ValueSet/statistic-model-code
 */
export const StatisticModelCodeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StatisticModelCodeCode =
  typeof StatisticModelCodeCode[keyof typeof StatisticModelCodeCode];
