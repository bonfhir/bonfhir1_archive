/**
 * Whether the cost applies to in-network or out-of-network providers.
 * http://terminology.hl7.org/ValueSet/insuranceplan-applicability
 */
export const BenefitCostApplicabilityCode = {
  /**
   * In Network
   */
  "in-network": "in-network",

  /**
   * Out of Network
   */
  "out-of-network": "out-of-network",

  /**
   * Other
   */
  other: "other",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BenefitCostApplicabilityCode =
  typeof BenefitCostApplicabilityCode[keyof typeof BenefitCostApplicabilityCode];
