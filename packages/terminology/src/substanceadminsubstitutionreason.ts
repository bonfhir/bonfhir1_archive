/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SubstanceAdminSubstitutionReason
 */
export const SubstanceAdminSubstitutionReasonCode = {
  /**
   * continuing therapy
   */
  CT: "CT",

  /**
   * formulary policy
   */
  FP: "FP",

  /**
   * out of stock
   */
  OS: "OS",

  /**
   * regulatory requirement
   */
  RR: "RR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubstanceAdminSubstitutionReasonCode =
  typeof SubstanceAdminSubstitutionReasonCode[keyof typeof SubstanceAdminSubstitutionReasonCode];
