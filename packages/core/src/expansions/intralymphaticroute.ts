/**
 * Intralymphatic
 * http://terminology.hl7.org/ValueSet/v3-IntralymphaticRoute
 */
export const IntralymphaticRouteCode = {
  /**
   * Injection, intralymphatic
   */
  ILYMPJINJ: "ILYMPJINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntralymphaticRouteCode =
  typeof IntralymphaticRouteCode[keyof typeof IntralymphaticRouteCode];
