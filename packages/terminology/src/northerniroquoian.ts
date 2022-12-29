/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-NorthernIroquoian
 */
export const NorthernIroquoianCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NorthernIroquoianCode =
  typeof NorthernIroquoianCode[keyof typeof NorthernIroquoianCode];
