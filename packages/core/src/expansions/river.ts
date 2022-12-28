/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-River
 */
export const RiverCode = {
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
export type RiverCode = typeof RiverCode[keyof typeof RiverCode];
