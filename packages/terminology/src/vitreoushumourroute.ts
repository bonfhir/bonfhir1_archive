/**
 * Vitreous humour
 * http://terminology.hl7.org/ValueSet/v3-VitreousHumourRoute
 */
export const VitreousHumourRouteCode = {
  /**
   * Implantation, intravitreal
   */
  Implantationintravitreal: "IVITIMPLNT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type VitreousHumourRouteCode =
  typeof VitreousHumourRouteCode[keyof typeof VitreousHumourRouteCode];
