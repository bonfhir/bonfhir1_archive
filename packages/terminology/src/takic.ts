/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Takic
 */
export const TakicCode = {
  /**
   * Cupan
   */
  Cupan: "_Cupan",

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

  /**
   * SerranoGabrielino
   */
  SerranoGabrielino: "_SerranoGabrielino",

  /**
   * Serrano
   */
  Serrano: "x-SER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TakicCode = typeof TakicCode[keyof typeof TakicCode];
