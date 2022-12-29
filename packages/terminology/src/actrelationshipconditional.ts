/**
 * Specifies under what circumstances (target Act) the source-Act may, must, must not or has occurred
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipConditional
 */
export const ActRelationshipConditionalCode = {
  /**
   * has contra-indication
   */
  hascontraindication: "CIND",

  /**
   * has pre-condition
   */
  hasprecondition: "PRCN",

  /**
   * has reason
   */
  hasreason: "RSON",

  /**
   * blocks
   */
  blocks: "BLOCK",

  /**
   * diagnoses
   */
  diagnoses: "DIAG",

  /**
   * immunization against
   */
  immunizationagainst: "IMM",

  /**
   * active immunization against
   */
  activeimmunizationagainst: "ACTIMM",

  /**
   * passive immunization against
   */
  passiveimmunizationagainst: "PASSIMM",

  /**
   * mitigates
   */
  mitigates: "MITGT",

  /**
   * recovers
   */
  recovers: "RCVY",

  /**
   * prophylaxis of
   */
  prophylaxisof: "PRYLX",

  /**
   * treats
   */
  treats: "TREAT",

  /**
   * adjunctive treatment
   */
  adjunctivetreatment: "ADJUNCT",

  /**
   * maintenance treatment
   */
  maintenancetreatment: "MTREAT",

  /**
   * palliates
   */
  palliates: "PALLTREAT",

  /**
   * symptomatic relief
   */
  symptomaticrelief: "SYMP",

  /**
   * has trigger
   */
  hastrigger: "TRIG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipConditionalCode =
  typeof ActRelationshipConditionalCode[keyof typeof ActRelationshipConditionalCode];
