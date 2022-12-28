/**
 * Urinary bladder
 * http://terminology.hl7.org/ValueSet/v3-UrinaryBladderRoute
 */
export const UrinaryBladderRouteCode = {
  /**
   * Injection, urinary bladder
   */
  BLADINJ: "BLADINJ",

  /**
   * Irrigation, urinary bladder
   */
  BLADIRR: "BLADIRR",

  /**
   * Irrigation, urinary bladder, continuous
   */
  BLADIRRC: "BLADIRRC",

  /**
   * Irrigation, urinary bladder, tidal
   */
  BLADIRRT: "BLADIRRT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UrinaryBladderRouteCode =
  typeof UrinaryBladderRouteCode[keyof typeof UrinaryBladderRouteCode];
