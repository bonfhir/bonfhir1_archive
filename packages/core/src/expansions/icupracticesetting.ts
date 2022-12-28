/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ICUPracticeSetting
 */
export const ICUPracticeSettingCode = {
  /**
   * Intensive care unit
   */
  ICU: "ICU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ICUPracticeSettingCode =
  typeof ICUPracticeSettingCode[keyof typeof ICUPracticeSettingCode];
