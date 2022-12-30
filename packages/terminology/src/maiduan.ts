/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Maiduan
 */
export const MaiduanCode = {
  /**
   * Northwest Maidu
   */
  "x-MAI": "x-MAI",

  /**
   * Northeast Maidu
   */
  "x-NMU": "x-NMU",

  /**
   * Nisenan
   */
  "x-NSZ": "x-NSZ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MaiduanCode = typeof MaiduanCode[keyof typeof MaiduanCode];
