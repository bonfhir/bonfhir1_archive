/**
 * Epidural
 * http://terminology.hl7.org/ValueSet/v3-EpiduralRoute
 */
export const EpiduralRouteCode = {
  /**
   * Infusion, epidural
   */
  Infusionepidural: "EPI",

  /**
   * Injection, epidural
   */
  Injectionepidural: "EPIDURINJ",

  /**
   * Injection, epidural, push
   */
  Injectionepiduralpush: "EPIINJ",

  /**
   * Injection, epidural, slow push
   */
  Injectionepiduralslowpush: "EPINJSP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EpiduralRouteCode =
  typeof EpiduralRouteCode[keyof typeof EpiduralRouteCode];
