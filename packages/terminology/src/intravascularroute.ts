/**
 * Intravascular
 * http://terminology.hl7.org/ValueSet/v3-IntravascularRoute
 */
export const IntravascularRouteCode = {
  /**
   * Diffusion, hemodialysis
   */
  Diffusionhemodialysis: "HEMODIFF",

  /**
   * Infusion, intravascular
   */
  Infusionintravascular: "IVASCINFUS",

  /**
   * Injection, hemodialysis port
   */
  Injectionhemodialysisport: "HEMOPORT",

  /**
   * Injection, intravascular
   */
  Injectionintravascular: "IVASCINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntravascularRouteCode =
  typeof IntravascularRouteCode[keyof typeof IntravascularRouteCode];
