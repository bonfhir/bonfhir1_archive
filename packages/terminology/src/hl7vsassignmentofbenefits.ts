/**
 * Value Set of codes which indicate whether an insured person agreed to assign the insurance benefits to a healthcare provider.  If so, the insurance will pay the provider directly.
 * http://terminology.hl7.org/ValueSet/v2-0135
 */
export const Hl7VSAssignmentOfBenefitsCode = {
  /**
   * Yes
   */
  Y: "Y",

  /**
   * No
   */
  N: "N",

  /**
   * Modified assignment
   */
  M: "M",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAssignmentOfBenefitsCode =
  typeof Hl7VSAssignmentOfBenefitsCode[keyof typeof Hl7VSAssignmentOfBenefitsCode];
