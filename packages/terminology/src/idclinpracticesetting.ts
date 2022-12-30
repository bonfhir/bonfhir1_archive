/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-IDClinPracticeSetting
 */
export const IDClinPracticeSettingCode = {
  /**
   * Infectious disease clinic
   */
  INFD: "INFD",

  /**
   * Pediatric infectious disease clinic
   */
  PEDID: "PEDID",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IDClinPracticeSettingCode =
  typeof IDClinPracticeSettingCode[keyof typeof IDClinPracticeSettingCode];
