/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAlaskanNativeAleutBristolBay
 */
export const RaceAlaskanNativeAleutBristolBayCode = {
  /**
   * Bristol Bay Aleut
   */
  BristolBayAleut: "1972-9",

  /**
   * Chignik
   */
  Chignik: "1973-7",

  /**
   * Chignik Lake
   */
  ChignikLake: "1974-5",

  /**
   * Egegik
   */
  Egegik: "1975-2",

  /**
   * Igiugig
   */
  Igiugig: "1976-0",

  /**
   * Ivanof Bay
   */
  IvanofBay: "1977-8",

  /**
   * King Salmon
   */
  KingSalmon: "1978-6",

  /**
   * Kokhanok
   */
  Kokhanok: "1979-4",

  /**
   * Perryville
   */
  Perryville: "1980-2",

  /**
   * Pilot Point
   */
  PilotPoint: "1981-0",

  /**
   * Port Heiden
   */
  PortHeiden: "1982-8",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAlaskanNativeAleutBristolBayCode =
  typeof RaceAlaskanNativeAleutBristolBayCode[keyof typeof RaceAlaskanNativeAleutBristolBayCode];
