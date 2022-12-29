/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xClinicalStatementObservationMood
 */
export const XClinicalStatementObservationMoodCode = {
  /**
   * appointment
   */
  appointment: "APT",

  /**
   * appointment request
   */
  appointmentrequest: "ARQ",

  /**
   * criterion
   */
  criterion: "CRT",

  /**
   * definition
   */
  definition: "DEF",

  /**
   * event (occurrence)
   */
  eventoccurrence: "EVN",

  /**
   * event criterion
   */
  eventcriterion: "EVN.CRT",

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
export type XClinicalStatementObservationMoodCode =
  typeof XClinicalStatementObservationMoodCode[keyof typeof XClinicalStatementObservationMoodCode];
