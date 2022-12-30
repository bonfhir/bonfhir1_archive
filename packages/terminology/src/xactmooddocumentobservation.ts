/**
 * Used to enumerate the moods that an observation can take within the body of a clinical document.
 * http://terminology.hl7.org/ValueSet/v3-xActMoodDocumentObservation
 */
export const XActMoodDocumentObservationCode = {
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
   * Goal
   */
  GOL: "GOL",

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
export type XActMoodDocumentObservationCode =
  typeof XActMoodDocumentObservationCode[keyof typeof XActMoodDocumentObservationCode];
