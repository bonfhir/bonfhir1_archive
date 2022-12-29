/**
 * Proposed therapy may be inappropriate or contraindicated due to an existing/recent patient condition or diagnosis
 * http://terminology.hl7.org/ValueSet/v3-ConditionDetectedIssueCode
 */
export const ConditionDetectedIssueCodeCode = {
  /**
   * Condition Alert
   */
  ConditionAlert: "COND",

  /**
   *
   */
  HGHT: "HGHT",

  /**
   * Lactation Alert
   */
  LactationAlert: "LACT",

  /**
   * Pregnancy Alert
   */
  PregnancyAlert: "PREG",

  /**
   *
   */
  WGHT: "WGHT",

  /**
   * High Dose for Weight Alert
   */
  HighDoseforWeightAlert: "DOSEHINDW",

  /**
   * Low Dose for Weight Alert
   */
  LowDoseforWeightAlert: "DOSELINDW",

  /**
   * High Dose for Height/Surface Area Alert
   */
  HighDoseforHeightSurfaceAreaAlert: "DOSEHINDSA",

  /**
   * Low Dose for Height/Surface Area Alert
   */
  LowDoseforHeightSurfaceAreaAlert: "DOSELINDSA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConditionDetectedIssueCodeCode =
  typeof ConditionDetectedIssueCodeCode[keyof typeof ConditionDetectedIssueCodeCode];
