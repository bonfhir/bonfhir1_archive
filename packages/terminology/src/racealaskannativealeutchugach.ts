/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAlaskanNativeAleutChugach
 */
export const RaceAlaskanNativeAleutChugachCode = {
  /**
   * Chugach Aleut
   */
  ChugachAleut: "1984-4",

  /**
   * Chenega
   */
  Chenega: "1985-1",

  /**
   * Chugach Corporation
   */
  ChugachCorporation: "1986-9",

  /**
   * English Bay
   */
  EnglishBay: "1987-7",

  /**
   * Port Graham
   */
  PortGraham: "1988-5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAlaskanNativeAleutChugachCode =
  typeof RaceAlaskanNativeAleutChugachCode[keyof typeof RaceAlaskanNativeAleutChugachCode];
