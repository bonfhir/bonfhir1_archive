/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-PedsClinPracticeSetting
 */
export const PedsClinPracticeSettingCode = {
  /**
   * Pediatrics clinic
   */
  PEDC: "PEDC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PedsClinPracticeSettingCode =
  typeof PedsClinPracticeSettingCode[keyof typeof PedsClinPracticeSettingCode];
