/**
 * Intrapleural
 * http://terminology.hl7.org/ValueSet/v3-IntrapleuralRoute
 */
export const IntrapleuralRouteCode = {
  /**
   * Injection, intrapleural
   */
  Injectionintrapleural: "IPLRINJ",

  /**
   * Instillation, chest tube
   */
  Instillationchesttube: "CTINSTL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntrapleuralRouteCode =
  typeof IntrapleuralRouteCode[keyof typeof IntrapleuralRouteCode];
