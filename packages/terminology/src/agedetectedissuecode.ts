/**
 * Proposed therapy may be inappropriate or contraindicated due to patient age
 * http://terminology.hl7.org/ValueSet/v3-AgeDetectedIssueCode
 */
export const AgeDetectedIssueCodeCode = {
  /**
   * Age Alert
   */
  AgeAlert: "AGE",

  /**
   * adult alert
   */
  adultalert: "ADALRT",

  /**
   * High Dose for Age Alert
   */
  HighDoseforAgeAlert: "DOSEHINDA",

  /**
   * Low Dose for Age Alert
   */
  LowDoseforAgeAlert: "DOSELINDA",

  /**
   * geriatric alert
   */
  geriatricalert: "GEALRT",

  /**
   * pediatric alert
   */
  pediatricalert: "PEALRT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AgeDetectedIssueCodeCode =
  typeof AgeDetectedIssueCodeCode[keyof typeof AgeDetectedIssueCodeCode];
