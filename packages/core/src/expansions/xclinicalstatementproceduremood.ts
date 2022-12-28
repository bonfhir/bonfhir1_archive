/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xClinicalStatementProcedureMood
 */
export const XClinicalStatementProcedureMoodCode = {
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
export type XClinicalStatementProcedureMoodCode =
  typeof XClinicalStatementProcedureMoodCode[keyof typeof XClinicalStatementProcedureMoodCode];
