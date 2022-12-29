/**
 * Suppository
 * http://terminology.hl7.org/ValueSet/v3-SuppositoryRoute
 */
export const SuppositoryRouteCode = {
  /**
   * Suppository, urethral
   */
  Suppositoryurethral: "URETHSUP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SuppositoryRouteCode =
  typeof SuppositoryRouteCode[keyof typeof SuppositoryRouteCode];
