/**
 * This value set includes a smattering of FDI tooth surface codes.
 * http://terminology.hl7.org/ValueSet/surface
 */
export const SurfaceCodesCode = {
  /**
   * Mesial
   */
  Mesial: "M",

  /**
   * Occlusal
   */
  Occlusal: "O",

  /**
   * Incisal
   */
  Incisal: "I",

  /**
   * Distal
   */
  Distal: "D",

  /**
   * Buccal
   */
  Buccal: "B",

  /**
   * Ventral
   */
  Ventral: "V",

  /**
   * Lingual
   */
  Lingual: "L",

  /**
   * Mesioclusal
   */
  Mesioclusal: "MO",

  /**
   * Distoclusal
   */
  Distoclusal: "DO",

  /**
   * Distoincisal
   */
  Distoincisal: "DI",

  /**
   * Mesioclusodistal
   */
  Mesioclusodistal: "MOD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SurfaceCodesCode =
  typeof SurfaceCodesCode[keyof typeof SurfaceCodesCode];
