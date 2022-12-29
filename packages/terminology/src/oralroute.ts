/**
 * Oral
 * http://terminology.hl7.org/ValueSet/v3-OralRoute
 */
export const OralRouteCode = {
  /**
   * Chew, oral
   */
  Cheworal: "CHEW",

  /**
   * Dissolve, oral
   */
  Dissolveoral: "DISSOLVE",

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

  /**
   * Topical application, oral
   */
  Topicalapplicationoral: "ORALTA",

  /**
   * Rinse, oral
   */
  Rinseoral: "ORRINSE",

  /**
   * Swallow, oral
   */
  Swalloworal: "PO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OralRouteCode = typeof OralRouteCode[keyof typeof OralRouteCode];
