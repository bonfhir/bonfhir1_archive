/**
 * Epidural
 * http://terminology.hl7.org/ValueSet/v3-EpiduralRoute
 */
export const EpiduralRouteCode = {
  /**
   * Infusion, epidural
   */
  EPI: "EPI",

  /**
   * Injection, epidural
   */
  EPIDURINJ: "EPIDURINJ",

  /**
   * Injection, epidural, push
   */
  EPIINJ: "EPIINJ",

  /**
   * Injection, epidural, slow push
   */
  EPINJSP: "EPINJSP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EpiduralRouteCode =
  typeof EpiduralRouteCode[keyof typeof EpiduralRouteCode];
