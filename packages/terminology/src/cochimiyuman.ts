/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-CochimiYuman
 */
export const CochimiYumanCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CochimiYumanCode =
  typeof CochimiYumanCode[keyof typeof CochimiYumanCode];
