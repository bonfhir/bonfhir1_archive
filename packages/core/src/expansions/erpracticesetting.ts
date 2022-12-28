/**
 * The section of a health care facility for providing rapid treatment to victims of sudden illness or trauma.
 * http://terminology.hl7.org/ValueSet/v3-ERPracticeSetting
 */
export const ERPracticeSettingCode = {
  /**
   * Emergency room
   */
  ER: "ER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ERPracticeSettingCode =
  typeof ERPracticeSettingCode[keyof typeof ERPracticeSettingCode];
