/**
 * Mucosal absorption
 * http://terminology.hl7.org/ValueSet/v3-MucosalAbsorptionRoute
 */
export const MucosalAbsorptionRouteCode = {
  /**
   * Mucosal absorption, intraduodenal
   */
  Mucosalabsorptionintraduodenal: "IDOUDMAB",

  /**
   * Mucosal absorption, intratracheal
   */
  Mucosalabsorptionintratracheal: "ITRACHMAB",

  /**
   * Mucosal absorption, submucosal
   */
  Mucosalabsorptionsubmucosal: "SMUCMAB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MucosalAbsorptionRouteCode =
  typeof MucosalAbsorptionRouteCode[keyof typeof MucosalAbsorptionRouteCode];
