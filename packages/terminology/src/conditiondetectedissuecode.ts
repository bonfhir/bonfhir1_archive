/**
 * Proposed therapy may be inappropriate or contraindicated due to an existing/recent patient condition or diagnosis
 * http://terminology.hl7.org/ValueSet/v3-ConditionDetectedIssueCode
 */
export const ConditionDetectedIssueCodeCode = {
  /**
   * Condition Alert
   */
  COND: "COND",

  /**
   *
   */
  HGHT: "HGHT",

  /**
   * Lactation Alert
   */
  LACT: "LACT",

  /**
   * Pregnancy Alert
   */
  PREG: "PREG",

  /**
   *
   */
  WGHT: "WGHT",

  /**
   * High Dose for Weight Alert
   */
  DOSEHINDW: "DOSEHINDW",

  /**
   * Low Dose for Weight Alert
   */
  DOSELINDW: "DOSELINDW",

  /**
   * High Dose for Height/Surface Area Alert
   */
  DOSEHINDSA: "DOSEHINDSA",

  /**
   * Low Dose for Height/Surface Area Alert
   */
  DOSELINDSA: "DOSELINDSA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConditionDetectedIssueCodeCode =
  typeof ConditionDetectedIssueCodeCode[keyof typeof ConditionDetectedIssueCodeCode];
