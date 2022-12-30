/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the patient's eligibility for a vaccination program. This value set is provided as a suggestive example.
 * http://terminology.hl7.org/ValueSet/immunization-program-eligibility
 */
export const ImmunizationProgramEligibilityCode = {
  /**
   * Not Eligible
   */
  ineligible: "ineligible",

  /**
   * Uninsured
   */
  uninsured: "uninsured",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImmunizationProgramEligibilityCode =
  typeof ImmunizationProgramEligibilityCode[keyof typeof ImmunizationProgramEligibilityCode];
