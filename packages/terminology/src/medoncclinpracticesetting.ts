/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-MedOncClinPracticeSetting
 */
export const MedOncClinPracticeSettingCode = {
  /**
   * Medical oncology clinic
   */
  Medicaloncologyclinic: "ONCL",

  /**
   * Pediatric oncology clinic
   */
  Pediatriconcologyclinic: "PEDHO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedOncClinPracticeSettingCode =
  typeof MedOncClinPracticeSettingCode[keyof typeof MedOncClinPracticeSettingCode];
