/**
 * How resource references can be aggregated.
 * http://hl7.org/fhir/ValueSet/resource-aggregation-mode
 */
export const AggregationModeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AggregationModeCode =
  typeof AggregationModeCode[keyof typeof AggregationModeCode];
