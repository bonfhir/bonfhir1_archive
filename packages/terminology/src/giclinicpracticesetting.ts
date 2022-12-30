/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-GIClinicPracticeSetting
 */
export const GIClinicPracticeSettingCode = {
  /**
   * Gastroenterology clinic
   */
  GI: "GI",

  /**
   * Pediatric gastroenterology clinic
   */
  PEDGI: "PEDGI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GIClinicPracticeSettingCode =
  typeof GIClinicPracticeSettingCode[keyof typeof GIClinicPracticeSettingCode];
