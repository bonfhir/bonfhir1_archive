/**
 * Definition: Characterizes how a patient was or will be transported to the site of a patient encounter.

*Examples:* Via ambulance, via public transit, on foot.
 * http://terminology.hl7.org/ValueSet/v3-ActPatientTransportationModeCode
 */
export const ActPatientTransportationModeCodeCode = {
  /**
   * ActPatientTransportationModeCode
   */
  ActPatientTransportationModeCode: "_ActPatientTransportationModeCode",

  /**
   * pedestrian transport
   */
  pedestriantransport: "AFOOT",

  /**
   * pedestrian transport
   */
  pedestriantransport: "OnFoot",

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

  /**
   * ambulance transport
   */
  ambulancetransport: "Ambulance",

  /**
   * law enforcement transport
   */
  lawenforcementtransport: "LAWENF",

  /**
   * law enforcement transport
   */
  lawenforcementtransport: "LawEnforcementVehicle",

  /**
   * private transport
   */
  privatetransport: "PRVTRN",

  /**
   * private transport
   */
  privatetransport: "PrivateTransport",

  /**
   * public transport
   */
  publictransport: "PUBTRN",

  /**
   * public transport
   */
  publictransport: "PublicTransport",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActPatientTransportationModeCodeCode =
  typeof ActPatientTransportationModeCodeCode[keyof typeof ActPatientTransportationModeCodeCode];
