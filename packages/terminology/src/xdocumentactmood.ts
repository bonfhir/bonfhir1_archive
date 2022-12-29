/**
 * Used to enumerate the moods that an act can take within the body of a clinical document.
 * http://terminology.hl7.org/ValueSet/v3-xDocumentActMood
 */
export const XDocumentActMoodCode = {
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
export type XDocumentActMoodCode =
  typeof XDocumentActMoodCode[keyof typeof XDocumentActMoodCode];
