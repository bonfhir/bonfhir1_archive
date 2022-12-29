/**
 * Used to enumerate the moods that an encounter can take within the body of a clinical document.
 * http://terminology.hl7.org/ValueSet/v3-xDocumentEncounterMood
 */
export const XDocumentEncounterMoodCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XDocumentEncounterMoodCode =
  typeof XDocumentEncounterMoodCode[keyof typeof XDocumentEncounterMoodCode];
