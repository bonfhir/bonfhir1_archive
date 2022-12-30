/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Yuman
 */
export const YumanCode = {
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
export type YumanCode = typeof YumanCode[keyof typeof YumanCode];
