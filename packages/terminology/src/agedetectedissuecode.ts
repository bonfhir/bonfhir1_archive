/**
 * Proposed therapy may be inappropriate or contraindicated due to patient age
 * http://terminology.hl7.org/ValueSet/v3-AgeDetectedIssueCode
 */
export const AgeDetectedIssueCodeCode = {
  /**
   * Age Alert
   */
  AGE: "AGE",

  /**
   * adult alert
   */
  ADALRT: "ADALRT",

  /**
   * High Dose for Age Alert
   */
  DOSEHINDA: "DOSEHINDA",

  /**
   * Low Dose for Age Alert
   */
  DOSELINDA: "DOSELINDA",

  /**
   * geriatric alert
   */
  GEALRT: "GEALRT",

  /**
   * pediatric alert
   */
  PEALRT: "PEALRT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AgeDetectedIssueCodeCode =
  typeof AgeDetectedIssueCodeCode[keyof typeof AgeDetectedIssueCodeCode];
