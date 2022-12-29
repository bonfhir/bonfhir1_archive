/**
 * Extra-amniotic
 * http://terminology.hl7.org/ValueSet/v3-ExtraAmnioticRoute
 */
export const ExtraAmnioticRouteCode = {
  /**
   * Injection, extra-amniotic
   */
  Injectionextraamniotic: "EXTRAMNINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExtraAmnioticRouteCode =
  typeof ExtraAmnioticRouteCode[keyof typeof ExtraAmnioticRouteCode];
