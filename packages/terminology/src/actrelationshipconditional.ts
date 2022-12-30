/**
 * Specifies under what circumstances (target Act) the source-Act may, must, must not or has occurred
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipConditional
 */
export const ActRelationshipConditionalCode = {
  /**
   * has contra-indication
   */
  CIND: "CIND",

  /**
   * has pre-condition
   */
  PRCN: "PRCN",

  /**
   * has reason
   */
  RSON: "RSON",

  /**
   * blocks
   */
  BLOCK: "BLOCK",

  /**
   * diagnoses
   */
  DIAG: "DIAG",

  /**
   * immunization against
   */
  IMM: "IMM",

  /**
   * active immunization against
   */
  ACTIMM: "ACTIMM",

  /**
   * passive immunization against
   */
  PASSIMM: "PASSIMM",

  /**
   * mitigates
   */
  MITGT: "MITGT",

  /**
   * recovers
   */
  RCVY: "RCVY",

  /**
   * prophylaxis of
   */
  PRYLX: "PRYLX",

  /**
   * treats
   */
  TREAT: "TREAT",

  /**
   * adjunctive treatment
   */
  ADJUNCT: "ADJUNCT",

  /**
   * maintenance treatment
   */
  MTREAT: "MTREAT",

  /**
   * palliates
   */
  PALLTREAT: "PALLTREAT",

  /**
   * symptomatic relief
   */
  SYMP: "SYMP",

  /**
   * has trigger
   */
  TRIG: "TRIG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipConditionalCode =
  typeof ActRelationshipConditionalCode[keyof typeof ActRelationshipConditionalCode];
