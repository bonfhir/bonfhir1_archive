/**
 * Used to enumerate the moods that an act can take within the body of a clinical document.
 * http://terminology.hl7.org/ValueSet/v3-xDocumentActMood
 */
export const XDocumentActMoodCode = {
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

  /**
   * risk
   */
  RSK: "RSK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XDocumentActMoodCode =
  typeof XDocumentActMoodCode[keyof typeof XDocumentActMoodCode];
