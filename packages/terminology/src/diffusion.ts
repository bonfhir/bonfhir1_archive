/**
 * Diffusion
 * http://terminology.hl7.org/ValueSet/v3-Diffusion
 */
export const DiffusionCode = {
  /**
   * Diffusion, extracorporeal
   */
  EXTCORPDIF: "EXTCORPDIF",

  /**
   * Diffusion, hemodialysis
   */
  HEMODIFF: "HEMODIFF",

  /**
   * Diffusion, transdermal
   */
  TRNSDERMD: "TRNSDERMD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DiffusionCode = typeof DiffusionCode[keyof typeof DiffusionCode];
