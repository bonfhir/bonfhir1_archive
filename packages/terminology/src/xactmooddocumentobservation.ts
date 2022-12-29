/**
 * Used to enumerate the moods that an observation can take within the body of a clinical document.
 * http://terminology.hl7.org/ValueSet/v3-xActMoodDocumentObservation
 */
export const XActMoodDocumentObservationCode = {
  /**
   * appointment
   */
  appointment: "APT",

  /**
   * appointment request
   */
  appointmentrequest: "ARQ",

  /**
   * definition
   */
  definition: "DEF",

  /**
   * event (occurrence)
   */
  eventoccurrence: "EVN",

  /**
   * Goal
   */
  Goal: "GOL",

  /**
   * intent
   */
  intent: "INT",

  /**
   * promise
   */
  promise: "PRMS",

  /**
   * proposal
   */
  proposal: "PRP",

  /**
   * request
   */
  request: "RQO",

  /**
   * risk
   */
  risk: "RSK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActMoodDocumentObservationCode =
  typeof XActMoodDocumentObservationCode[keyof typeof XActMoodDocumentObservationCode];
