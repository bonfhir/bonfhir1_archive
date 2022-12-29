/**
 * Endocervical
 * http://terminology.hl7.org/ValueSet/v3-EndocervicalRoute
 */
export const EndocervicalRouteCode = {
  /**
   * Injection, amniotic fluid
   */
  Injectionamnioticfluid: "AMNINJ",

  /**
   * Injection, biliary tract
   */
  Injectionbiliarytract: "BILINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EndocervicalRouteCode =
  typeof EndocervicalRouteCode[keyof typeof EndocervicalRouteCode];
