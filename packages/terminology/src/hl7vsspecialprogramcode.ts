/**
 * Value Set of codes that record a health insurance program required for healthcare visit reimbursement.
 * http://terminology.hl7.org/ValueSet/v2-0214
 */
export const Hl7VSSpecialProgramCodeCode = {
  /**
   * Child Health Assistance
   */
  ChildHealthAssistance: "CH",

  /**
   * Elective Surgery Program
   */
  ElectiveSurgeryProgram: "ES",

  /**
   * Family Planning
   */
  FamilyPlanning: "FP",

  /**
   * Other
   */
  Other: "O",

  /**
   * Unknown
   */
  Unknown: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSpecialProgramCodeCode =
  typeof Hl7VSSpecialProgramCodeCode[keyof typeof Hl7VSSpecialProgramCodeCode];
