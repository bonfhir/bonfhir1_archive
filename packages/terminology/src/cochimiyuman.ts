/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-CochimiYuman
 */
export const CochimiYumanCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CochimiYumanCode =
  typeof CochimiYumanCode[keyof typeof CochimiYumanCode];
