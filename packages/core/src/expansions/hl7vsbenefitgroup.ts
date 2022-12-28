/**
 * Value Set of codes that specify the benefit group.
 * http://terminology.hl7.org/ValueSet/v2-0556
 */
export const Hl7VSBenefitGroupCode = {
  /**
   * AMBULATORY CARE
   */
  AMB: "AMB",

  /**
   * DENTAL
   */
  DENT: "DENT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSBenefitGroupCode =
  typeof Hl7VSBenefitGroupCode[keyof typeof Hl7VSBenefitGroupCode];
