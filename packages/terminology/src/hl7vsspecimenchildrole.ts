/**
 * Value Set of codes that specify for child specimens the relationship between this specimen and the parent specimen.
 * http://terminology.hl7.org/ValueSet/v2-0494
 */
export const Hl7VSSpecimenChildRoleCode = {
  /**
   * Aliquot
   */
  Aliquot: "A",

  /**
   * Component
   */
  Component: "C",

  /**
   * Modified from original specimen
   */
  Modifiedfromoriginalspecimen: "M",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSpecimenChildRoleCode =
  typeof Hl7VSSpecimenChildRoleCode[keyof typeof Hl7VSSpecimenChildRoleCode];
