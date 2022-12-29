/**
 * Extracorporeal circulation
 * http://terminology.hl7.org/ValueSet/v3-ExtracorporealCirculationRoute
 */
export const ExtracorporealCirculationRouteCode = {
  /**
   * Diffusion, extracorporeal
   */
  Diffusionextracorporeal: "EXTCORPDIF",

  /**
   * Injection, extracorporeal
   */
  Injectionextracorporeal: "EXTCORPINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExtracorporealCirculationRouteCode =
  typeof ExtracorporealCirculationRouteCode[keyof typeof ExtracorporealCirculationRouteCode];
