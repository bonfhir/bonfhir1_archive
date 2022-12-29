/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Salishan
 */
export const SalishanCode = {
  /**
   * CentralSalish
   */
  CentralSalish: "_CentralSalish",

  /**
   * Clallam
   */
  Clallam: "x-CLM",

  /**
   * Lushootseed
   */
  Lushootseed: "x-LUT",

  /**
   * Northern Straits
   */
  NorthernStraits: "x-STR",

  /**
   * InteriorSalish
   */
  InteriorSalish: "_InteriorSalish",

  /**
   * Columbian
   */
  Columbian: "x-COL",

  /**
   * Coeur D'alene
   */
  CoeurDalene: "x-CRD",

  /**
   * Kalispel
   */
  Kalispel: "x-FLA",

  /**
   * Okanagan
   */
  Okanagan: "x-OKA",

  /**
   * Tsamosan
   */
  Tsamosan: "_Tsamosan",

  /**
   * Lower Chehalis
   */
  LowerChehalis: "x-CEA",

  /**
   * Upper Chehalis
   */
  UpperChehalis: "x-CJH",

  /**
   * Cowlitz
   */
  Cowlitz: "x-COW",

  /**
   * Quinault
   */
  Quinault: "x-QUN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SalishanCode = typeof SalishanCode[keyof typeof SalishanCode];
