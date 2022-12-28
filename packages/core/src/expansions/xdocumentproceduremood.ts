/**
 * Used to enumerate the moods that a procedure can take within the body of a clinical document.
 * http://terminology.hl7.org/ValueSet/v3-xDocumentProcedureMood
 */
export const XDocumentProcedureMoodCode = {
  /**
   * appointment
   */
  APT: "APT",

  /**
   * appointment request
   */
  ARQ: "ARQ",

  /**
   * definition
   */
  DEF: "DEF",

  /**
   * event (occurrence)
   */
  EVN: "EVN",

  /**
   * intent
   */
  INT: "INT",

  /**
   * promise
   */
  PRMS: "PRMS",

  /**
   * proposal
   */
  PRP: "PRP",

  /**
   * request
   */
  RQO: "RQO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XDocumentProcedureMoodCode =
  typeof XDocumentProcedureMoodCode[keyof typeof XDocumentProcedureMoodCode];
