/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xClinicalStatementSupplyMood
 */
export const XClinicalStatementSupplyMoodCode = {
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
export type XClinicalStatementSupplyMoodCode =
  typeof XClinicalStatementSupplyMoodCode[keyof typeof XClinicalStatementSupplyMoodCode];
