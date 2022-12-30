/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-NorthernIroquoian
 */
export const NorthernIroquoianCode = {
  /**
   * Cayuga
   */
  "x-CAY": "x-CAY",

  /**
   * Mohawk
   */
  "x-MOH": "x-MOH",

  /**
   * Oneida
   */
  "x-ONE": "x-ONE",

  /**
   * Onondaga
   */
  "x-ONO": "x-ONO",

  /**
   * Seneca
   */
  "x-SEE": "x-SEE",

  /**
   * Tuscarora
   */
  "x-TUS": "x-TUS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NorthernIroquoianCode =
  typeof NorthernIroquoianCode[keyof typeof NorthernIroquoianCode];
