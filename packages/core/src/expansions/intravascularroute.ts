/**
 * Intravascular
 * http://terminology.hl7.org/ValueSet/v3-IntravascularRoute
 */
export const IntravascularRouteCode = {
  /**
   * Diffusion, hemodialysis
   */
  HEMODIFF: "HEMODIFF",

  /**
   * Infusion, intravascular
   */
  IVASCINFUS: "IVASCINFUS",

  /**
   * Injection, hemodialysis port
   */
  HEMOPORT: "HEMOPORT",

  /**
   * Injection, intravascular
   */
  IVASCINJ: "IVASCINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntravascularRouteCode =
  typeof IntravascularRouteCode[keyof typeof IntravascularRouteCode];
