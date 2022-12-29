/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xClinicalStatementProcedureMood
 */
export const XClinicalStatementProcedureMoodCode = {
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
export type XClinicalStatementProcedureMoodCode =
  typeof XClinicalStatementProcedureMoodCode[keyof typeof XClinicalStatementProcedureMoodCode];
