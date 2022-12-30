/**
 * Oral
 * http://terminology.hl7.org/ValueSet/v3-OralRoute
 */
export const OralRouteCode = {
  /**
   * Chew, oral
   */
  CHEW: "CHEW",

  /**
   * Dissolve, oral
   */
  DISSOLVE: "DISSOLVE",

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

  /**
   * Topical application, oral
   */
  ORALTA: "ORALTA",

  /**
   * Rinse, oral
   */
  ORRINSE: "ORRINSE",

  /**
   * Swallow, oral
   */
  PO: "PO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OralRouteCode = typeof OralRouteCode[keyof typeof OralRouteCode];
