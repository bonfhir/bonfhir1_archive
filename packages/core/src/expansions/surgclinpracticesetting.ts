/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SurgClinPracticeSetting
 */
export const SurgClinPracticeSettingCode = {
  /**
   * Surgery clinic
   */
  SU: "SU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SurgClinPracticeSettingCode =
  typeof SurgClinPracticeSettingCode[keyof typeof SurgClinPracticeSettingCode];
