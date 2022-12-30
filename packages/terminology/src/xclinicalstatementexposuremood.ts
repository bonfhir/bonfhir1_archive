/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xClinicalStatementExposureMood
 */
export const XClinicalStatementExposureMoodCode = {
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
   * risk
   */
  RSK: "RSK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XClinicalStatementExposureMoodCode =
  typeof XClinicalStatementExposureMoodCode[keyof typeof XClinicalStatementExposureMoodCode];
