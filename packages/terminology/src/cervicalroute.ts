/**
 * Cervix of the uterus
 * http://terminology.hl7.org/ValueSet/v3-CervicalRoute
 */
export const CervicalRouteCode = {
  /**
   * Topical application, cervical
   */
  Topicalapplicationcervical: "CERV",

  /**
   * Injection, cervical
   */
  Injectioncervical: "CERVINJ",

  /**
   * Insertion, cervical (uterine)
   */
  Insertioncervicaluterine: "CERVINS",

  /**
   * Topical application, dental
   */
  Topicalapplicationdental: "DEN",

  /**
   * Rinse, dental
   */
  Rinsedental: "DENRINSE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CervicalRouteCode =
  typeof CervicalRouteCode[keyof typeof CervicalRouteCode];
