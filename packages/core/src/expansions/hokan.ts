/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Hokan
 */
export const HokanCode = {
  /**
   * CochimiYuman
   */
  _CochimiYuman: "_CochimiYuman",

  /**
   * Yuman
   */
  _Yuman: "_Yuman",

  /**
   * DeltaCalifornia
   */
  _DeltaCalifornia: "_DeltaCalifornia",

  /**
   * Diegueno
   */
  _Diegueno: "_Diegueno",

  /**
   * Kumeyaay
   */
  "x-DIH": "x-DIH",

  /**
   * Cocopa
   */
  "x-COC": "x-COC",

  /**
   * Pai
   */
  _Pai: "_Pai",

  /**
   * Havasupai
   */
  "x-YUF": "x-YUF",

  /**
   * River
   */
  _River: "_River",

  /**
   * Mohave
   */
  "x-MOV": "x-MOV",

  /**
   * Maricopa
   */
  "x-MRC": "x-MRC",

  /**
   * Quechan
   */
  "x-YUM": "x-YUM",

  /**
   * Palaihnihan
   */
  _Palaihnihan: "_Palaihnihan",

  /**
   * Achumawi
   */
  "x-ACH": "x-ACH",

  /**
   * Atsugewi
   */
  "x-ATW": "x-ATW",

  /**
   * Pomoan
   */
  _Pomoan: "_Pomoan",

  /**
   * Kashaya
   */
  "x-KJU": "x-KJU",

  /**
   * Northeastern Pomo
   */
  "x-PEF": "x-PEF",

  /**
   * Southeastern Pomo
   */
  "x-PEO": "x-PEO",

  /**
   * Southern Pomo
   */
  "x-PEQ": "x-PEQ",

  /**
   * Central Pomo
   */
  "x-POO": "x-POO",

  /**
   * Shasta
   */
  _Shasta: "_Shasta",

  /**
   * Shasta
   */
  "x-SHT": "x-SHT",

  /**
   * Karok
   */
  "x-KYH": "x-KYH",

  /**
   * Washoe
   */
  "x-WAS": "x-WAS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HokanCode = typeof HokanCode[keyof typeof HokanCode];
