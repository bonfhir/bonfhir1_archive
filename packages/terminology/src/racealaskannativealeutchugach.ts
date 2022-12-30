/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAlaskanNativeAleutChugach
 */
export const RaceAlaskanNativeAleutChugachCode = {
  /**
   * Chugach Aleut
   */
  "1984-4": "1984-4",

  /**
   * Chenega
   */
  "1985-1": "1985-1",

  /**
   * Chugach Corporation
   */
  "1986-9": "1986-9",

  /**
   * English Bay
   */
  "1987-7": "1987-7",

  /**
   * Port Graham
   */
  "1988-5": "1988-5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAlaskanNativeAleutChugachCode =
  typeof RaceAlaskanNativeAleutChugachCode[keyof typeof RaceAlaskanNativeAleutChugachCode];
