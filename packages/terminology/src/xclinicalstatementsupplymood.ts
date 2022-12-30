/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xClinicalStatementSupplyMood
 */
export const XClinicalStatementSupplyMoodCode = {
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
export type XClinicalStatementSupplyMoodCode =
  typeof XClinicalStatementSupplyMoodCode[keyof typeof XClinicalStatementSupplyMoodCode];
