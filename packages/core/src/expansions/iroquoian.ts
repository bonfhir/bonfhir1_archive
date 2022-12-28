/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Iroquoian
 */
export const IroquoianCode = {
  /**
   * NorthernIroquoian
   */
  _NorthernIroquoian: "_NorthernIroquoian",

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

  /**
   * Cherokee
   */
  "x-CER": "x-CER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IroquoianCode = typeof IroquoianCode[keyof typeof IroquoianCode];
