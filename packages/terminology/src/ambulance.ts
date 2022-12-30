/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Ambulance
 */
export const AmbulanceCode = {
  /**
   * ambulance transport
   */
  AMBT: "AMBT",

  /**
   * fixed-wing ambulance transport
   */
  AMBAIR: "AMBAIR",

  /**
   * fixed-wing ambulance transport
   */
  "Fixed-wingAmbulance": "Fixed-wingAmbulance",

  /**
   * ground ambulance transport
   */
  AMBGRND: "AMBGRND",

  /**
   * ground ambulance transport
   */
  GroundAmbulance: "GroundAmbulance",

  /**
   * helicopter ambulance transport
   */
  AMBHELO: "AMBHELO",

  /**
   * helicopter ambulance transport
   */
  HelicopterAmbulance: "HelicopterAmbulance",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AmbulanceCode = typeof AmbulanceCode[keyof typeof AmbulanceCode];
