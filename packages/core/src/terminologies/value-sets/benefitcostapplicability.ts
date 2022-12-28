/**
 * Whether the cost applies to in-network or out-of-network providers.
 * http://hl7.org/fhir/ValueSet/insuranceplan-applicability
 */
export const BenefitCostApplicabilityCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BenefitCostApplicabilityCode =
  typeof BenefitCostApplicabilityCode[keyof typeof BenefitCostApplicabilityCode];
