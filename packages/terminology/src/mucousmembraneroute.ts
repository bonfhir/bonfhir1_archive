/**
 * Mucous membrane
 * http://terminology.hl7.org/ValueSet/v3-MucousMembraneRoute
 */
export const MucousMembraneRouteCode = {
  /**
   * Topical application, mucous membrane
   */
  MUC: "MUC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MucousMembraneRouteCode =
  typeof MucousMembraneRouteCode[keyof typeof MucousMembraneRouteCode];
