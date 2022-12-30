/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Takic
 */
export const TakicCode = {
  /**
   * Cupan
   */
  _Cupan: "_Cupan",

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

  /**
   * SerranoGabrielino
   */
  _SerranoGabrielino: "_SerranoGabrielino",

  /**
   * Serrano
   */
  "x-SER": "x-SER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TakicCode = typeof TakicCode[keyof typeof TakicCode];
