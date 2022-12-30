/**
 * Electro-osmosis
 * http://terminology.hl7.org/ValueSet/v3-ElectroOsmosisRoute
 */
export const ElectroOsmosisRouteCode = {
  /**
   * Electro-osmosis
   */
  ELECTOSMOS: "ELECTOSMOS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ElectroOsmosisRouteCode =
  typeof ElectroOsmosisRouteCode[keyof typeof ElectroOsmosisRouteCode];
