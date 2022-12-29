/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xClinicalStatementSubstanceMood
 */
export const XClinicalStatementSubstanceMoodCode = {
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
export type XClinicalStatementSubstanceMoodCode =
  typeof XClinicalStatementSubstanceMoodCode[keyof typeof XClinicalStatementSubstanceMoodCode];
