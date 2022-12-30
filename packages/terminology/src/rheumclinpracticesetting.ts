/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RheumClinPracticeSetting
 */
export const RheumClinPracticeSettingCode = {
  /**
   * Rheumatology clinic
   */
  RHEUM: "RHEUM",

  /**
   * Pediatric rheumatology clinic
   */
  PEDRHEUM: "PEDRHEUM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RheumClinPracticeSettingCode =
  typeof RheumClinPracticeSettingCode[keyof typeof RheumClinPracticeSettingCode];
