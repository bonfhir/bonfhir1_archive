/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAlaskanNativeAleutAlutiiq
 */
export const RaceAlaskanNativeAleutAlutiiqCode = {
  /**
   * Alutiiq Aleut
   */
  "1968-7": "1968-7",

  /**
   * Tatitlek
   */
  "1969-5": "1969-5",

  /**
   * Ugashik
   */
  "1970-3": "1970-3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAlaskanNativeAleutAlutiiqCode =
  typeof RaceAlaskanNativeAleutAlutiiqCode[keyof typeof RaceAlaskanNativeAleutAlutiiqCode];
