/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Salishan
 */
export const SalishanCode = {
  /**
   * CentralSalish
   */
  _CentralSalish: "_CentralSalish",

  /**
   * Clallam
   */
  "x-CLM": "x-CLM",

  /**
   * Lushootseed
   */
  "x-LUT": "x-LUT",

  /**
   * Northern Straits
   */
  "x-STR": "x-STR",

  /**
   * InteriorSalish
   */
  _InteriorSalish: "_InteriorSalish",

  /**
   * Columbian
   */
  "x-COL": "x-COL",

  /**
   * Coeur D'alene
   */
  "x-CRD": "x-CRD",

  /**
   * Kalispel
   */
  "x-FLA": "x-FLA",

  /**
   * Okanagan
   */
  "x-OKA": "x-OKA",

  /**
   * Tsamosan
   */
  _Tsamosan: "_Tsamosan",

  /**
   * Lower Chehalis
   */
  "x-CEA": "x-CEA",

  /**
   * Upper Chehalis
   */
  "x-CJH": "x-CJH",

  /**
   * Cowlitz
   */
  "x-COW": "x-COW",

  /**
   * Quinault
   */
  "x-QUN": "x-QUN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SalishanCode = typeof SalishanCode[keyof typeof SalishanCode];
