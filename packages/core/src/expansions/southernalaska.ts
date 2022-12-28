/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SouthernAlaska
 */
export const SouthernAlaskaCode = {
  /**
   * Ahtna
   */
  "x-AHT": "x-AHT",

  /**
   * Tanaina
   */
  "x-TFN": "x-TFN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SouthernAlaskaCode =
  typeof SouthernAlaskaCode[keyof typeof SouthernAlaskaCode];
