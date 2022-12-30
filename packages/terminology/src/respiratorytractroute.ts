/**
 * Respiratory tract
 * http://terminology.hl7.org/ValueSet/v3-RespiratoryTractRoute
 */
export const RespiratoryTractRouteCode = {
  /**
   * Inhalation, respiratory
   */
  IPINHL: "IPINHL",

  /**
   * Inhalation, oral intermittent flow
   */
  ORIFINHL: "ORIFINHL",

  /**
   * Inhalation, oral rebreather mask
   */
  REBREATH: "REBREATH",

  /**
   * Inhalation, respiratory
   */
  ORINHL: "ORINHL",

  /**
   * Inhalation, respiratory
   */
  RESPINHL: "RESPINHL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RespiratoryTractRouteCode =
  typeof RespiratoryTractRouteCode[keyof typeof RespiratoryTractRouteCode];
