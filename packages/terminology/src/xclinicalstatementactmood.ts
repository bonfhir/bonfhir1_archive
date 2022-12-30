/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xClinicalStatementActMood
 */
export const XClinicalStatementActMoodCode = {
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
export type XClinicalStatementActMoodCode =
  typeof XClinicalStatementActMoodCode[keyof typeof XClinicalStatementActMoodCode];
