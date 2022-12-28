/**
 * A practice setting where diagnostic procedures or therapeutic interventions are performed
 * http://terminology.hl7.org/ValueSet/v3-DiagTherPracticeSetting
 */
export const DiagTherPracticeSettingCode = {
  /**
   * Diagnostics or therapeutics unit
   */
  DX: "DX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DiagTherPracticeSettingCode =
  typeof DiagTherPracticeSettingCode[keyof typeof DiagTherPracticeSettingCode];
