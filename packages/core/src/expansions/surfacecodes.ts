/**
 * This value set includes a smattering of FDI tooth surface codes.
 * http://terminology.hl7.org/ValueSet/surface
 */
export const SurfaceCodesCode = {
  /**
   * Mesial
   */
  M: "M",

  /**
   * Occlusal
   */
  O: "O",

  /**
   * Incisal
   */
  I: "I",

  /**
   * Distal
   */
  D: "D",

  /**
   * Buccal
   */
  B: "B",

  /**
   * Ventral
   */
  V: "V",

  /**
   * Lingual
   */
  L: "L",

  /**
   * Mesioclusal
   */
  MO: "MO",

  /**
   * Distoclusal
   */
  DO: "DO",

  /**
   * Distoincisal
   */
  DI: "DI",

  /**
   * Mesioclusodistal
   */
  MOD: "MOD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SurfaceCodesCode =
  typeof SurfaceCodesCode[keyof typeof SurfaceCodesCode];
