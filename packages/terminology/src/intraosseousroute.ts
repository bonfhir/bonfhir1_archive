/**
 * Intraosseous
 * http://terminology.hl7.org/ValueSet/v3-IntraosseousRoute
 */
export const IntraosseousRouteCode = {
  /**
   * Infusion, intraosseous, continuous
   */
  IOSSC: "IOSSC",

  /**
   * Injection, intraosseous
   */
  IOSSINJ: "IOSSINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntraosseousRouteCode =
  typeof IntraosseousRouteCode[keyof typeof IntraosseousRouteCode];
