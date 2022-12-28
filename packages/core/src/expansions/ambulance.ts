/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Ambulance
 */
export const AmbulanceCode = {
  /**
   * ambulance transport
   */
  AMBT: "AMBT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AmbulanceCode = typeof AmbulanceCode[keyof typeof AmbulanceCode];
