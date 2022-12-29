/**
 * Whether the cost applies to in-network or out-of-network providers.
 * http://terminology.hl7.org/ValueSet/insuranceplan-applicability
 */
export const BenefitCostApplicabilityCode = {
  /**
   * In Network
   */
  InNetwork: "in-network",

  /**
   * Out of Network
   */
  OutofNetwork: "out-of-network",

  /**
   * Other
   */
  Other: "other",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BenefitCostApplicabilityCode =
  typeof BenefitCostApplicabilityCode[keyof typeof BenefitCostApplicabilityCode];
