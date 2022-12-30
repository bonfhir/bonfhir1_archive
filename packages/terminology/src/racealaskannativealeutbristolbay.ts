/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAlaskanNativeAleutBristolBay
 */
export const RaceAlaskanNativeAleutBristolBayCode = {
  /**
   * Bristol Bay Aleut
   */
  "1972-9": "1972-9",

  /**
   * Chignik
   */
  "1973-7": "1973-7",

  /**
   * Chignik Lake
   */
  "1974-5": "1974-5",

  /**
   * Egegik
   */
  "1975-2": "1975-2",

  /**
   * Igiugig
   */
  "1976-0": "1976-0",

  /**
   * Ivanof Bay
   */
  "1977-8": "1977-8",

  /**
   * King Salmon
   */
  "1978-6": "1978-6",

  /**
   * Kokhanok
   */
  "1979-4": "1979-4",

  /**
   * Perryville
   */
  "1980-2": "1980-2",

  /**
   * Pilot Point
   */
  "1981-0": "1981-0",

  /**
   * Port Heiden
   */
  "1982-8": "1982-8",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAlaskanNativeAleutBristolBayCode =
  typeof RaceAlaskanNativeAleutBristolBayCode[keyof typeof RaceAlaskanNativeAleutBristolBayCode];
