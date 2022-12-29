/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-River
 */
export const RiverCode = {
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
export type RiverCode = typeof RiverCode[keyof typeof RiverCode];
