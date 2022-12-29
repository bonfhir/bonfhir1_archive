/**
 * Intracervical
 * http://terminology.hl7.org/ValueSet/v3-IntracervicalRoute
 */
export const IntracervicalRouteCode = {
  /**
   * Injection, intracervical (uterus)
   */
  Injectionintracervicaluterus: "IUINJC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntracervicalRouteCode =
  typeof IntracervicalRouteCode[keyof typeof IntracervicalRouteCode];
