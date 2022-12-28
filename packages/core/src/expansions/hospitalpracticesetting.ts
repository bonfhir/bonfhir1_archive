/**
 * An acute care institution that provides medical, surgical, or psychiatric care and treatment for the sick or the injured.
 * http://terminology.hl7.org/ValueSet/v3-HospitalPracticeSetting
 */
export const HospitalPracticeSettingCode = {
  /**
   * Hospital
   */
  HOSP: "HOSP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HospitalPracticeSettingCode =
  typeof HospitalPracticeSettingCode[keyof typeof HospitalPracticeSettingCode];
