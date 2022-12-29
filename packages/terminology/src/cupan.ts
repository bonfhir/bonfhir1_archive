/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Cupan
 */
export const CupanCode = {
  /**
   * Cahuilla
   */
  Cahuilla: "x-CHL",

  /**
   * Cupeno
   */
  Cupeno: "x-CUP",

  /**
   * Luiseno
   */
  Luiseno: "x-LUI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CupanCode = typeof CupanCode[keyof typeof CupanCode];
