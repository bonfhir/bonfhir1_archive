/**
 * Relates a patient encounter act (source) to the transportation act (target) representing the patient"s arrival at or departure from the site of a patient encounter.
 * http://terminology.hl7.org/ValueSet/v3-xActRelationshipPatientTransport
 */
export const XActRelationshipPatientTransportCode = {
  /**
   * arrival
   */
  arrival: "ARR",

  /**
   * departure
   */
  departure: "DEP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActRelationshipPatientTransportCode =
  typeof XActRelationshipPatientTransportCode[keyof typeof XActRelationshipPatientTransportCode];
