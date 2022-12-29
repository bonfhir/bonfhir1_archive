/**
 * Paranasal sinuses
 * http://terminology.hl7.org/ValueSet/v3-ParanasalSinusesRoute
 */
export const ParanasalSinusesRouteCode = {
  /**
   * Injection, paranasal sinuses
   */
  Injectionparanasalsinuses: "PNSINJ",

  /**
   * Instillation, paranasal sinuses
   */
  Instillationparanasalsinuses: "PNSINSTL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParanasalSinusesRouteCode =
  typeof ParanasalSinusesRouteCode[keyof typeof ParanasalSinusesRouteCode];
