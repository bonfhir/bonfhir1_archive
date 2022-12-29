/**
 * Diffusion
 * http://terminology.hl7.org/ValueSet/v3-Diffusion
 */
export const DiffusionCode = {
  /**
   * Diffusion, extracorporeal
   */
  Diffusionextracorporeal: "EXTCORPDIF",

  /**
   * Diffusion, hemodialysis
   */
  Diffusionhemodialysis: "HEMODIFF",

  /**
   * Diffusion, transdermal
   */
  Diffusiontransdermal: "TRNSDERMD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DiffusionCode = typeof DiffusionCode[keyof typeof DiffusionCode];
