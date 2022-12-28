/**
 * A statistic about a statistic, e.g.  Confidence interval or p-value
 * http://hl7.org/fhir/ValueSet/attribute-estimate-type
 */
export const AttributeEstimateTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AttributeEstimateTypeCode =
  typeof AttributeEstimateTypeCode[keyof typeof AttributeEstimateTypeCode];
