/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-CentralAlaskaYukon
 */
export const CentralAlaskaYukonCode = {
  /**
   * KoyukonIngalik
   */
  KoyukonIngalik: "_KoyukonIngalik",

  /**
   * Holikachuk
   */
  Holikachuk: "x-HOI",

  /**
   * Degexit'an
   */
  Degexitan: "x-ING",

  /**
   * Koyukon
   */
  Koyukon: "x-KOY",

  /**
   * KutchinHan
   */
  KutchinHan: "_KutchinHan",

  /**
   * Han
   */
  Han: "x-HAA",

  /**
   * Kutchin
   */
  Kutchin: "x-KUC",

  /**
   * TananaTutchone
   */
  TananaTutchone: "_TananaTutchone",

  /**
   * Tanana
   */
  Tanana: "_Tanana",

  /**
   * Lower Tanana
   */
  LowerTanana: "x-TAA",

  /**
   * Upper Tanana
   */
  UpperTanana: "x-TAU",

  /**
   * Tanacross
   */
  Tanacross: "x-TCB",

  /**
   * Upper Kuskokwim
   */
  UpperKuskokwim: "x-KUU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CentralAlaskaYukonCode =
  typeof CentralAlaskaYukonCode[keyof typeof CentralAlaskaYukonCode];
