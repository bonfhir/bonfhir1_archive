/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-HemClinPracticeSetting
 */
export const HemClinPracticeSettingCode = {
  /**
   * Hematology clinic
   */
  HEM: "HEM",

  /**
   * Pediatric hematology clinic
   */
  PEDHEM: "PEDHEM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HemClinPracticeSettingCode =
  typeof HemClinPracticeSettingCode[keyof typeof HemClinPracticeSettingCode];
