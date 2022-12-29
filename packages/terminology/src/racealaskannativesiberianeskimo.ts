/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAlaskanNativeSiberianEskimo
 */
export const RaceAlaskanNativeSiberianEskimoCode = {
  /**
   * Siberian Eskimo
   */
  SiberianEskimo: "1891-1",

  /**
   * Gambell
   */
  Gambell: "1892-9",

  /**
   * Savoonga
   */
  Savoonga: "1893-7",

  /**
   * Siberian Yupik
   */
  SiberianYupik: "1894-5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAlaskanNativeSiberianEskimoCode =
  typeof RaceAlaskanNativeSiberianEskimoCode[keyof typeof RaceAlaskanNativeSiberianEskimoCode];
