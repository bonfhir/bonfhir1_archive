/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xClinicalStatementEncounterMood
 */
export const XClinicalStatementEncounterMoodCode = {
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
export type XClinicalStatementEncounterMoodCode =
  typeof XClinicalStatementEncounterMoodCode[keyof typeof XClinicalStatementEncounterMoodCode];
