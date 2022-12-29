/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-GIClinicPracticeSetting
 */
export const GIClinicPracticeSettingCode = {
  /**
   * Gastroenterology clinic
   */
  Gastroenterologyclinic: "GI",

  /**
   * Pediatric gastroenterology clinic
   */
  Pediatricgastroenterologyclinic: "PEDGI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GIClinicPracticeSettingCode =
  typeof GIClinicPracticeSettingCode[keyof typeof GIClinicPracticeSettingCode];
