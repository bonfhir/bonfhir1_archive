/**
 * Intrauterine
 * http://terminology.hl7.org/ValueSet/v3-IntrauterineRoute
 */
export const IntrauterineRouteCode = {
  /**
   * Injection, intrauterine
   */
  Injectionintrauterine: "IUINJ",

  /**
   * Injection, intraureteral, retrograde
   */
  Injectionintraureteralretrograde: "IURETINJ",

  /**
   * Insertion, intrauterine
   */
  Insertionintrauterine: "IU",

  /**
   * Instillation, intrauterine
   */
  Instillationintrauterine: "IUINSTL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntrauterineRouteCode =
  typeof IntrauterineRouteCode[keyof typeof IntrauterineRouteCode];
