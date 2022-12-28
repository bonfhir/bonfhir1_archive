/**
 * Cervix of the uterus
 * http://terminology.hl7.org/ValueSet/v3-CervicalRoute
 */
export const CervicalRouteCode = {
  /**
   * Topical application, cervical
   */
  CERV: "CERV",

  /**
   * Injection, cervical
   */
  CERVINJ: "CERVINJ",

  /**
   * Insertion, cervical (uterine)
   */
  CERVINS: "CERVINS",

  /**
   * Topical application, dental
   */
  DEN: "DEN",

  /**
   * Rinse, dental
   */
  DENRINSE: "DENRINSE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CervicalRouteCode =
  typeof CervicalRouteCode[keyof typeof CervicalRouteCode];
