/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Cupan
 */
export const CupanCode = {
  /**
   * Cahuilla
   */
  "x-CHL": "x-CHL",

  /**
   * Cupeno
   */
  "x-CUP": "x-CUP",

  /**
   * Luiseno
   */
  "x-LUI": "x-LUI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CupanCode = typeof CupanCode[keyof typeof CupanCode];
