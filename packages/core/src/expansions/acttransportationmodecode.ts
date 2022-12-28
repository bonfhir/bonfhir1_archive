/**
 * Characterizes how a transportation act was or will be carried out.

*Examples:* Via private transport, via public transit, via courier.
 * http://terminology.hl7.org/ValueSet/v3-ActTransportationModeCode
 */
export const ActTransportationModeCodeCode = {
  /**
   * ActTransportationModeCode
   */
  _ActTransportationModeCode: "_ActTransportationModeCode",

  /**
   * ActPatientTransportationModeCode
   */
  _ActPatientTransportationModeCode: "_ActPatientTransportationModeCode",

  /**
   * pedestrian transport
   */
  AFOOT: "AFOOT",

  /**
   * pedestrian transport
   */
  OnFoot: "OnFoot",

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

  /**
   * ambulance transport
   */
  Ambulance: "Ambulance",

  /**
   * law enforcement transport
   */
  LAWENF: "LAWENF",

  /**
   * law enforcement transport
   */
  LawEnforcementVehicle: "LawEnforcementVehicle",

  /**
   * private transport
   */
  PRVTRN: "PRVTRN",

  /**
   * private transport
   */
  PrivateTransport: "PrivateTransport",

  /**
   * public transport
   */
  PUBTRN: "PUBTRN",

  /**
   * public transport
   */
  PublicTransport: "PublicTransport",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActTransportationModeCodeCode =
  typeof ActTransportationModeCodeCode[keyof typeof ActTransportationModeCodeCode];
