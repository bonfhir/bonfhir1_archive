/**
 * Characterizes how a transportation act was or will be carried out.

*Examples:* Via private transport, via public transit, via courier.
 * http://terminology.hl7.org/ValueSet/v3-ActTransportationModeCode
 */
export const ActTransportationModeCodeCode = {
  /**
   * ActTransportationModeCode
   */
  ActTransportationModeCode: "_ActTransportationModeCode",

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
export type ActTransportationModeCodeCode =
  typeof ActTransportationModeCodeCode[keyof typeof ActTransportationModeCodeCode];
