/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xClinicalStatementObservationMood
 */
export const XClinicalStatementObservationMoodCode = {
  /**
   * appointment
   */
  APT: "APT",

  /**
   * appointment request
   */
  ARQ: "ARQ",

  /**
   * criterion
   */
  CRT: "CRT",

  /**
   * definition
   */
  DEF: "DEF",

  /**
   * event (occurrence)
   */
  EVN: "EVN",

  /**
   * event criterion
   */
  "EVN.CRT": "EVN.CRT",

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
export type XClinicalStatementObservationMoodCode =
  typeof XClinicalStatementObservationMoodCode[keyof typeof XClinicalStatementObservationMoodCode];
