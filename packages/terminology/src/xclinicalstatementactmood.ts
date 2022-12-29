/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xClinicalStatementActMood
 */
export const XClinicalStatementActMoodCode = {
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
export type XClinicalStatementActMoodCode =
  typeof XClinicalStatementActMoodCode[keyof typeof XClinicalStatementActMoodCode];
