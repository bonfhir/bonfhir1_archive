/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Ambulance
 */
export const AmbulanceCode = {
  /**
   * ambulance transport
   */
  ambulancetransport: "AMBT",

  /**
   * fixed-wing ambulance transport
   */
  fixedwingambulancetransport: "AMBAIR",

  /**
   * fixed-wing ambulance transport
   */
  fixedwingambulancetransport: "Fixed-wingAmbulance",

  /**
   * ground ambulance transport
   */
  groundambulancetransport: "AMBGRND",

  /**
   * ground ambulance transport
   */
  groundambulancetransport: "GroundAmbulance",

  /**
   * helicopter ambulance transport
   */
  helicopterambulancetransport: "AMBHELO",

  /**
   * helicopter ambulance transport
   */
  helicopterambulancetransport: "HelicopterAmbulance",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AmbulanceCode = typeof AmbulanceCode[keyof typeof AmbulanceCode];
