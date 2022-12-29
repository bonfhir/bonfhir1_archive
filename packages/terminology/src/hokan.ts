/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Hokan
 */
export const HokanCode = {
  /**
   * CochimiYuman
   */
  CochimiYuman: "_CochimiYuman",

  /**
   * Yuman
   */
  Yuman: "_Yuman",

  /**
   * DeltaCalifornia
   */
  DeltaCalifornia: "_DeltaCalifornia",

  /**
   * Diegueno
   */
  Diegueno: "_Diegueno",

  /**
   * Kumeyaay
   */
  Kumeyaay: "x-DIH",

  /**
   * Cocopa
   */
  Cocopa: "x-COC",

  /**
   * Pai
   */
  Pai: "_Pai",

  /**
   * Havasupai
   */
  Havasupai: "x-YUF",

  /**
   * River
   */
  River: "_River",

  /**
   * Mohave
   */
  Mohave: "x-MOV",

  /**
   * Maricopa
   */
  Maricopa: "x-MRC",

  /**
   * Quechan
   */
  Quechan: "x-YUM",

  /**
   * Palaihnihan
   */
  Palaihnihan: "_Palaihnihan",

  /**
   * Achumawi
   */
  Achumawi: "x-ACH",

  /**
   * Atsugewi
   */
  Atsugewi: "x-ATW",

  /**
   * Pomoan
   */
  Pomoan: "_Pomoan",

  /**
   * Kashaya
   */
  Kashaya: "x-KJU",

  /**
   * Northeastern Pomo
   */
  NortheasternPomo: "x-PEF",

  /**
   * Southeastern Pomo
   */
  SoutheasternPomo: "x-PEO",

  /**
   * Southern Pomo
   */
  SouthernPomo: "x-PEQ",

  /**
   * Central Pomo
   */
  CentralPomo: "x-POO",

  /**
   * Shasta
   */
  Shasta: "_Shasta",

  /**
   * Shasta
   */
  Shasta: "x-SHT",

  /**
   * Karok
   */
  Karok: "x-KYH",

  /**
   * Washoe
   */
  Washoe: "x-WAS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HokanCode = typeof HokanCode[keyof typeof HokanCode];
