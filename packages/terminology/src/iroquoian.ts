/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Iroquoian
 */
export const IroquoianCode = {
  /**
   * NorthernIroquoian
   */
  NorthernIroquoian: "_NorthernIroquoian",

  /**
   * Cayuga
   */
  Cayuga: "x-CAY",

  /**
   * Mohawk
   */
  Mohawk: "x-MOH",

  /**
   * Oneida
   */
  Oneida: "x-ONE",

  /**
   * Onondaga
   */
  Onondaga: "x-ONO",

  /**
   * Seneca
   */
  Seneca: "x-SEE",

  /**
   * Tuscarora
   */
  Tuscarora: "x-TUS",

  /**
   * Cherokee
   */
  Cherokee: "x-CER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IroquoianCode = typeof IroquoianCode[keyof typeof IroquoianCode];
