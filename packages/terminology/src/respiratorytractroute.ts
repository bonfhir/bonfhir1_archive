/**
 * Respiratory tract
 * http://terminology.hl7.org/ValueSet/v3-RespiratoryTractRoute
 */
export const RespiratoryTractRouteCode = {
  /**
   * Inhalation, respiratory
   */
  Inhalationrespiratory: "IPINHL",

  /**
   * Inhalation, oral intermittent flow
   */
  Inhalationoralintermittentflow: "ORIFINHL",

  /**
   * Inhalation, oral rebreather mask
   */
  Inhalationoralrebreathermask: "REBREATH",

  /**
   * Inhalation, respiratory
   */
  Inhalationrespiratory: "ORINHL",

  /**
   * Inhalation, respiratory
   */
  Inhalationrespiratory: "RESPINHL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RespiratoryTractRouteCode =
  typeof RespiratoryTractRouteCode[keyof typeof RespiratoryTractRouteCode];
