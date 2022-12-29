/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Maiduan
 */
export const MaiduanCode = {
  /**
   * Northwest Maidu
   */
  NorthwestMaidu: "x-MAI",

  /**
   * Northeast Maidu
   */
  NortheastMaidu: "x-NMU",

  /**
   * Nisenan
   */
  Nisenan: "x-NSZ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MaiduanCode = typeof MaiduanCode[keyof typeof MaiduanCode];
