/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-NephClinPracticeSetting
 */
export const NephClinPracticeSettingCode = {
  /**
   * Nephrology clinic
   */
  NEPH: "NEPH",

  /**
   * Pediatric nephrology clinic
   */
  PEDNEPH: "PEDNEPH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NephClinPracticeSettingCode =
  typeof NephClinPracticeSettingCode[keyof typeof NephClinPracticeSettingCode];
