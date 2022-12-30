/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAlaskanNativeSiberianEskimo
 */
export const RaceAlaskanNativeSiberianEskimoCode = {
  /**
   * Siberian Eskimo
   */
  "1891-1": "1891-1",

  /**
   * Gambell
   */
  "1892-9": "1892-9",

  /**
   * Savoonga
   */
  "1893-7": "1893-7",

  /**
   * Siberian Yupik
   */
  "1894-5": "1894-5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAlaskanNativeSiberianEskimoCode =
  typeof RaceAlaskanNativeSiberianEskimoCode[keyof typeof RaceAlaskanNativeSiberianEskimoCode];
