/**
 * Intrauterine
 * http://terminology.hl7.org/ValueSet/v3-IntrauterineRoute
 */
export const IntrauterineRouteCode = {
  /**
   * Injection, intrauterine
   */
  IUINJ: "IUINJ",

  /**
   * Injection, intraureteral, retrograde
   */
  IURETINJ: "IURETINJ",

  /**
   * Insertion, intrauterine
   */
  IU: "IU",

  /**
   * Instillation, intrauterine
   */
  IUINSTL: "IUINSTL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntrauterineRouteCode =
  typeof IntrauterineRouteCode[keyof typeof IntrauterineRouteCode];
