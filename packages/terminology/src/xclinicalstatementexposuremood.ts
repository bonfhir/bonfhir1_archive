/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xClinicalStatementExposureMood
 */
export const XClinicalStatementExposureMoodCode = {
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
   * risk
   */
  risk: "RSK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XClinicalStatementExposureMoodCode =
  typeof XClinicalStatementExposureMoodCode[keyof typeof XClinicalStatementExposureMoodCode];
