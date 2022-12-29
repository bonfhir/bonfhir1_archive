/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAlaskanNativeAleutAlutiiq
 */
export const RaceAlaskanNativeAleutAlutiiqCode = {
  /**
   * Alutiiq Aleut
   */
  AlutiiqAleut: "1968-7",

  /**
   * Tatitlek
   */
  Tatitlek: "1969-5",

  /**
   * Ugashik
   */
  Ugashik: "1970-3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAlaskanNativeAleutAlutiiqCode =
  typeof RaceAlaskanNativeAleutAlutiiqCode[keyof typeof RaceAlaskanNativeAleutAlutiiqCode];
