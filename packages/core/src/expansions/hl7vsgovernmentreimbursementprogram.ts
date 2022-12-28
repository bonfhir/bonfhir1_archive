/**
 * Value Set of codes that specify codes that indicate an agency that the practitioner is authorized to bill for medical services.  Existing codes only for use in the United States.
 * http://terminology.hl7.org/ValueSet/v2-0401
 */
export const Hl7VSGovernmentReimbursementProgramCode = {
  /**
   * Medicare
   */
  MM: "MM",

  /**
   * Medi-Cal
   */
  C: "C",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSGovernmentReimbursementProgramCode =
  typeof Hl7VSGovernmentReimbursementProgramCode[keyof typeof Hl7VSGovernmentReimbursementProgramCode];
