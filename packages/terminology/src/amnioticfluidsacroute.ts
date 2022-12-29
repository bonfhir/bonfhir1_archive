/**
 * Amniotic fluid sac
 * http://terminology.hl7.org/ValueSet/v3-AmnioticFluidSacRoute
 */
export const AmnioticFluidSacRouteCode = {
  /**
   * Injection, amniotic fluid
   */
  Injectionamnioticfluid: "AMNINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AmnioticFluidSacRouteCode =
  typeof AmnioticFluidSacRouteCode[keyof typeof AmnioticFluidSacRouteCode];
