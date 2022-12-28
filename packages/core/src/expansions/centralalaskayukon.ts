/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-CentralAlaskaYukon
 */
export const CentralAlaskaYukonCode = {
  /**
   * KoyukonIngalik
   */
  _KoyukonIngalik: "_KoyukonIngalik",

  /**
   * Holikachuk
   */
  "x-HOI": "x-HOI",

  /**
   * Degexit'an
   */
  "x-ING": "x-ING",

  /**
   * Koyukon
   */
  "x-KOY": "x-KOY",

  /**
   * KutchinHan
   */
  _KutchinHan: "_KutchinHan",

  /**
   * Han
   */
  "x-HAA": "x-HAA",

  /**
   * Kutchin
   */
  "x-KUC": "x-KUC",

  /**
   * TananaTutchone
   */
  _TananaTutchone: "_TananaTutchone",

  /**
   * Tanana
   */
  _Tanana: "_Tanana",

  /**
   * Lower Tanana
   */
  "x-TAA": "x-TAA",

  /**
   * Upper Tanana
   */
  "x-TAU": "x-TAU",

  /**
   * Tanacross
   */
  "x-TCB": "x-TCB",

  /**
   * Upper Kuskokwim
   */
  "x-KUU": "x-KUU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CentralAlaskaYukonCode =
  typeof CentralAlaskaYukonCode[keyof typeof CentralAlaskaYukonCode];
