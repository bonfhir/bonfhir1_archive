/**
 * Used to enumerate the moods that a procedure can take within the body of a clinical document.
 * http://terminology.hl7.org/ValueSet/v3-xDocumentProcedureMood
 */
export const XDocumentProcedureMoodCode = {
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
export type XDocumentProcedureMoodCode =
  typeof XDocumentProcedureMoodCode[keyof typeof XDocumentProcedureMoodCode];
