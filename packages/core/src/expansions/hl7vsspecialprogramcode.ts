/**
 * Value Set of codes that record a health insurance program required for healthcare visit reimbursement.
 * http://terminology.hl7.org/ValueSet/v2-0214
 */
export const Hl7VSSpecialProgramCodeCode = {
  /**
   * Child Health Assistance
   */
  CH: "CH",

  /**
   * Elective Surgery Program
   */
  ES: "ES",

  /**
   * Family Planning
   */
  FP: "FP",

  /**
   * Other
   */
  O: "O",

  /**
   * Unknown
   */
  U: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSpecialProgramCodeCode =
  typeof Hl7VSSpecialProgramCodeCode[keyof typeof Hl7VSSpecialProgramCodeCode];
