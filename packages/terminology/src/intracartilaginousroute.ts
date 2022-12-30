/**
 * Intracartilaginous
 * http://terminology.hl7.org/ValueSet/v3-IntracartilaginousRoute
 */
export const IntracartilaginousRouteCode = {
  /**
   * Injection, intracartilaginous
   */
  ICARTINJ: "ICARTINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntracartilaginousRouteCode =
  typeof IntracartilaginousRouteCode[keyof typeof IntracartilaginousRouteCode];
