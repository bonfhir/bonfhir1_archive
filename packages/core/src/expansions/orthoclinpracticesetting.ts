/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-OrthoClinPracticeSetting
 */
export const OrthoClinPracticeSettingCode = {
  /**
   * Orthopedics clinic
   */
  ORTHO: "ORTHO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OrthoClinPracticeSettingCode =
  typeof OrthoClinPracticeSettingCode[keyof typeof OrthoClinPracticeSettingCode];
