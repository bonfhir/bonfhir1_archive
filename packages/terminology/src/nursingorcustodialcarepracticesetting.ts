/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-NursingOrCustodialCarePracticeSetting
 */
export const NursingOrCustodialCarePracticeSettingCode = {
  /**
   * Nursing or custodial care facility
   */
  NCCF: "NCCF",

  /**
   * Skilled nursing facility
   */
  SNF: "SNF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NursingOrCustodialCarePracticeSettingCode =
  typeof NursingOrCustodialCarePracticeSettingCode[keyof typeof NursingOrCustodialCarePracticeSettingCode];
