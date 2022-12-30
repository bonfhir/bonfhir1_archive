/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Chimakuan
 */
export const ChimakuanCode = {
  /**
   * Quileute
   */
  "x-QUI": "x-QUI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ChimakuanCode = typeof ChimakuanCode[keyof typeof ChimakuanCode];
