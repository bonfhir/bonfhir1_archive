/**
 * Urinary bladder
 * http://terminology.hl7.org/ValueSet/v3-UrinaryBladderRoute
 */
export const UrinaryBladderRouteCode = {
  /**
   * Injection, urinary bladder
   */
  Injectionurinarybladder: "BLADINJ",

  /**
   * Irrigation, urinary bladder
   */
  Irrigationurinarybladder: "BLADIRR",

  /**
   * Irrigation, urinary bladder, continuous
   */
  Irrigationurinarybladdercontinuous: "BLADIRRC",

  /**
   * Irrigation, urinary bladder, tidal
   */
  Irrigationurinarybladdertidal: "BLADIRRT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UrinaryBladderRouteCode =
  typeof UrinaryBladderRouteCode[keyof typeof UrinaryBladderRouteCode];
