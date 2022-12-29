/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-NephClinPracticeSetting
 */
export const NephClinPracticeSettingCode = {
  /**
   * Nephrology clinic
   */
  Nephrologyclinic: "NEPH",

  /**
   * Pediatric nephrology clinic
   */
  Pediatricnephrologyclinic: "PEDNEPH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NephClinPracticeSettingCode =
  typeof NephClinPracticeSettingCode[keyof typeof NephClinPracticeSettingCode];
