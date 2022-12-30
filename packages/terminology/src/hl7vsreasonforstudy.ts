/**
 * Value Set of codes that provide additional information to the universal service identifier on why a test, study or review was ordered.
 * http://terminology.hl7.org/ValueSet/v2-0951
 */
export const Hl7VSReasonForStudyCode = {
  /**
   * Bank residual specimen
   */
  BS: "BS",

  /**
   * Confirm results value
   */
  CR: "CR",

  /**
   * Store residual specimen pending follow up
   */
  FP: "FP",

  /**
   * Interpret results
   */
  IN: "IN",

  /**
   * Review clinically inconsistent results
   */
  IR: "IR",

  /**
   * Incorrect test performed
   */
  IT: "IT",

  /**
   * Test ordering problem
   */
  OP: "OP",

  /**
   * Patient identification problem
   */
  PI: "PI",

  /**
   * Suspected interference
   */
  SI: "SI",

  /**
   * Sampling problem
   */
  SP: "SP",

  /**
   * Specimen transport problem
   */
  TP: "TP",

  /**
   * Turnaround time problem
   */
  TT: "TT",

  /**
   * Incorrect results
   */
  XR: "XR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSReasonForStudyCode =
  typeof Hl7VSReasonForStudyCode[keyof typeof Hl7VSReasonForStudyCode];
