/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xClinicalStatementEncounterMood
 */
export const XClinicalStatementEncounterMoodCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XClinicalStatementEncounterMoodCode =
  typeof XClinicalStatementEncounterMoodCode[keyof typeof XClinicalStatementEncounterMoodCode];
