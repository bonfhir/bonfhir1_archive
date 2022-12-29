/**
 * Value Set of codes that provide additional information to the universal service identifier on why a test, study or review was ordered.
 * http://terminology.hl7.org/ValueSet/v2-0951
 */
export const Hl7VSReasonForStudyCode = {
  /**
   * Bank residual specimen
   */
  Bankresidualspecimen: "BS",

  /**
   * Confirm results value
   */
  Confirmresultsvalue: "CR",

  /**
   * Store residual specimen pending follow up
   */
  Storeresidualspecimenpendingfollowup: "FP",

  /**
   * Interpret results
   */
  Interpretresults: "IN",

  /**
   * Review clinically inconsistent results
   */
  Reviewclinicallyinconsistentresults: "IR",

  /**
   * Incorrect test performed
   */
  Incorrecttestperformed: "IT",

  /**
   * Test ordering problem
   */
  Testorderingproblem: "OP",

  /**
   * Patient identification problem
   */
  Patientidentificationproblem: "PI",

  /**
   * Suspected interference
   */
  Suspectedinterference: "SI",

  /**
   * Sampling problem
   */
  Samplingproblem: "SP",

  /**
   * Specimen transport problem
   */
  Specimentransportproblem: "TP",

  /**
   * Turnaround time problem
   */
  Turnaroundtimeproblem: "TT",

  /**
   * Incorrect results
   */
  Incorrectresults: "XR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSReasonForStudyCode =
  typeof Hl7VSReasonForStudyCode[keyof typeof Hl7VSReasonForStudyCode];
