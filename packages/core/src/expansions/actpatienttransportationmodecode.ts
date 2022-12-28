/**
 * Definition: Characterizes how a patient was or will be transported to the site of a patient encounter.

*Examples:* Via ambulance, via public transit, on foot.
 * http://terminology.hl7.org/ValueSet/v3-ActPatientTransportationModeCode
 */
export const ActPatientTransportationModeCodeCode = {
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
export type ActPatientTransportationModeCodeCode =
  typeof ActPatientTransportationModeCodeCode[keyof typeof ActPatientTransportationModeCodeCode];
