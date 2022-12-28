/**
 * Codes specifying the type of probability distribution.
 * http://hl7.org/fhir/ValueSet/probability-distribution-type
 */
export const ProbabilityDistributionTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProbabilityDistributionTypeCode =
  typeof ProbabilityDistributionTypeCode[keyof typeof ProbabilityDistributionTypeCode];
