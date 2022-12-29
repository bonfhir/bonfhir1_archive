/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SubstanceAdminSubstitutionReason
 */
export const SubstanceAdminSubstitutionReasonCode = {
  /**
   * continuing therapy
   */
  continuingtherapy: "CT",

  /**
   * formulary policy
   */
  formularypolicy: "FP",

  /**
   * out of stock
   */
  outofstock: "OS",

  /**
   * regulatory requirement
   */
  regulatoryrequirement: "RR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubstanceAdminSubstitutionReasonCode =
  typeof SubstanceAdminSubstitutionReasonCode[keyof typeof SubstanceAdminSubstitutionReasonCode];
