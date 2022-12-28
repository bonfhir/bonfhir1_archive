/**
 * A code specifying the meaning and purpose of every ActRelationship instance. Each of its values implies specific constraints to what kinds of Act objects can be related and in which way.

*Discussion:* The types of act relationships fall under one of 5 categories:

1.) (De)-composition, with composite (source) and component (target)

2.) Sequel which includes follow-up, fulfillment, instantiation, replacement, transformation, etc. that all have in common that source and target are Acts of essentially the same kind but with variances in mood and other attributes, and where the target exists before the source and the source refers to the target that it links back to.

3.) Pre-condition, trigger, reason, contraindication, with the conditioned Act at the source and the condition or reason at the target.

4.) Post-condition, outcome, goal and risk, with the Act at the source having the outcome or goal at the target.

5.) A host of functional relationships including support, cause, derivation, etc. generalized under the notion of "pertinence".
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipType
 */
export const ActRelationshipTypeCode = {
  /**
   * act relationship type
   */
  ART: "ART",

  /**
   * ActClassTemporallyPertains
   */
  _ActClassTemporallyPertains: "_ActClassTemporallyPertains",

  /**
   * ActRelationshipTemporallyPertainsEnd
   */
  _ActRelationshipTemporallyPertainsEnd:
    "_ActRelationshipTemporallyPertainsEnd",

  /**
   * ActRelationshipTemporallyPertainsStart
   */
  _ActRelationshipTemporallyPertainsStart:
    "_ActRelationshipTemporallyPertainsStart",

  /**
   * ActClassTemporallyPertains
   */
  TemporallyPertains: "TemporallyPertains",

  /**
   * ActRelationshipAccounting
   */
  _ActRelationshipAccounting: "_ActRelationshipAccounting",

  /**
   * ActRelationshipCostTracking
   */
  _ActRelationshipCostTracking: "_ActRelationshipCostTracking",

  /**
   * has charge
   */
  CHRG: "CHRG",

  /**
   * has cost
   */
  COST: "COST",

  /**
   * ActRelationshipPosting
   */
  _ActRelationshipPosting: "_ActRelationshipPosting",

  /**
   * has credit
   */
  CREDIT: "CREDIT",

  /**
   * has debit
   */
  DEBIT: "DEBIT",

  /**
   * ActRelationshipAccounting
   */
  _ActRelationshipPosts: "_ActRelationshipPosts",

  /**
   * ActRelationshipConditional
   */
  _ActRelationshipConditional: "_ActRelationshipConditional",

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

  /**
   * ActRelationshipTemporallyPertains
   */
  _ActRelationshipTemporallyPertains: "_ActRelationshipTemporallyPertains",

  /**
   * ActRelationshipTemporallyPertainsApproximates
   */
  _ActRelationshipTemporallyPertainsApproximates:
    "_ActRelationshipTemporallyPertainsApproximates",

  /**
   * ends near end
   */
  ENE: "ENE",

  /**
   * ends concurrent with
   */
  ECW: "ECW",

  /**
   * concurrent with
   */
  CONCURRENT: "CONCURRENT",

  /**
   * starts before start of, ends with
   */
  SBSECWE: "SBSECWE",

  /**
   * ends near start
   */
  ENS: "ENS",

  /**
   * ends concurrent with start of
   */
  ECWS: "ECWS",

  /**
   * starts near end
   */
  SNE: "SNE",

  /**
   * starts concurrent with end of
   */
  SCWE: "SCWE",

  /**
   * starts near start
   */
  SNS: "SNS",

  /**
   * starts concurrent with
   */
  SCW: "SCW",

  /**
   * starts with. ends before end of
   */
  SCWSEBE: "SCWSEBE",

  /**
   * starts with, ends after end of
   */
  SCWSEAE: "SCWSEAE",

  /**
   * ends after start of
   */
  EAS: "EAS",

  /**
   * ends after end of
   */
  EAE: "EAE",

  /**
   * starts after start of, ends after end of
   */
  SASEAE: "SASEAE",

  /**
   * contains end of
   */
  SBEEAE: "SBEEAE",

  /**
   * start after start of, contains end of
   */
  SASSBEEAS: "SASSBEEAS",

  /**
   * contains time of
   */
  SBSEAE: "SBSEAE",

  /**
   * starts after start of
   */
  SAS: "SAS",

  /**
   * starts after end of
   */
  SAE: "SAE",

  /**
   * occurs during
   */
  DURING: "DURING",

  /**
   * starts after start of, ends with
   */
  SASECWE: "SASECWE",

  /**
   * ends after or concurrent with start of
   */
  EASORECWS: "EASORECWS",

  /**
   * ends after or concurrent with end of
   */
  EAEORECW: "EAEORECW",

  /**
   * independent of time of
   */
  INDEPENDENT: "INDEPENDENT",

  /**
   * starts after or concurrent with end of
   */
  SAEORSCWE: "SAEORSCWE",

  /**
   * starts after or concurrent with start of
   */
  SASORSCW: "SASORSCW",

  /**
   * starts before or concurrent with end of
   */
  SBEORSCWE: "SBEORSCWE",

  /**
   * overlaps with
   */
  OVERLAP: "OVERLAP",

  /**
   * ends during
   */
  EDU: "EDU",

  /**
   * contains start of, ends before end of
   */
  SBSEASEBE: "SBSEASEBE",

  /**
   * contains start of
   */
  SBSEAS: "SBSEAS",

  /**
   * starts during
   */
  SDU: "SDU",

  /**
   * starts before end of
   */
  SBE: "SBE",

  /**
   * ends before end of
   */
  EBE: "EBE",

  /**
   * starts before start of, ends before end of
   */
  SBSEBE: "SBSEBE",

  /**
   * ends before or concurrent with start of
   */
  EBSORECWS: "EBSORECWS",

  /**
   * ends before start of
   */
  EBS: "EBS",

  /**
   * ends before or concurrent with end of
   */
  EBEORECW: "EBEORECW",

  /**
   * starts before or concurrent with start of
   */
  SBSORSCW: "SBSORSCW",

  /**
   * starts before start of
   */
  SBS: "SBS",

  /**
   * authorized by
   */
  AUTH: "AUTH",

  /**
   * is etiology for
   */
  CAUS: "CAUS",

  /**
   * has component
   */
  COMP: "COMP",

  /**
   * has control variable
   */
  CTRLV: "CTRLV",

  /**
   * has member
   */
  MBR: "MBR",

  /**
   * has step
   */
  STEP: "STEP",

  /**
   * arrival
   */
  ARR: "ARR",

  /**
   * departure
   */
  DEP: "DEP",

  /**
   * has part
   */
  PART: "PART",

  /**
   * covered by
   */
  COVBY: "COVBY",

  /**
   * is derived from
   */
  DRIV: "DRIV",

  /**
   * episodeLink
   */
  ELNK: "ELNK",

  /**
   * provides evidence for
   */
  EVID: "EVID",

  /**
   * exacerbated by
   */
  EXACBY: "EXACBY",

  /**
   * has explanation
   */
  EXPL: "EXPL",

  /**
   * interfered by
   */
  INTF: "INTF",

  /**
   * items located
   */
  ITEMSLOC: "ITEMSLOC",

  /**
   * limited by
   */
  LIMIT: "LIMIT",

  /**
   * has metadata
   */
  META: "META",

  /**
   * is manifestation of
   */
  MFST: "MFST",

  /**
   * assigns name
   */
  NAME: "NAME",

  /**
   * has outcome
   */
  OUTC: "OUTC",

  /**
   * Act Relationsip Objective
   */
  _ActRelationsipObjective: "_ActRelationsipObjective",

  /**
   * has continuing objective
   */
  OBJC: "OBJC",

  /**
   * has final objective
   */
  OBJF: "OBJF",

  /**
   * has goal
   */
  GOAL: "GOAL",

  /**
   * has risk
   */
  RISK: "RISK",

  /**
   * has pertinent information
   */
  PERT: "PERT",

  /**
   * has previous instance
   */
  PREV: "PREV",

  /**
   * refers to
   */
  REFR: "REFR",

  /**
   * uses
   */
  USE: "USE",

  /**
   * has reference values
   */
  REFV: "REFV",

  /**
   * relieved by
   */
  RELVBY: "RELVBY",

  /**
   * is sequel
   */
  SEQL: "SEQL",

  /**
   * is appendage
   */
  APND: "APND",

  /**
   * has baseline
   */
  BSLN: "BSLN",

  /**
   * complies with
   */
  COMPLY: "COMPLY",

  /**
   * documents
   */
  DOC: "DOC",

  /**
   * fulfills
   */
  FLFS: "FLFS",

  /**
   * occurrence
   */
  OCCR: "OCCR",

  /**
   * references order
   */
  OREF: "OREF",

  /**
   * schedules request
   */
  SCH: "SCH",

  /**
   * has generalization
   */
  GEN: "GEN",

  /**
   * evaluates (goal)
   */
  GEVL: "GEVL",

  /**
   * instantiates (master)
   */
  INST: "INST",

  /**
   * modifies
   */
  MOD: "MOD",

  /**
   * matches (trigger)
   */
  MTCH: "MTCH",

  /**
   * has option
   */
  OPTN: "OPTN",

  /**
   * re-challenge
   */
  RCHAL: "RCHAL",

  /**
   * reverses
   */
  REV: "REV",

  /**
   * replaces
   */
  RPLC: "RPLC",

  /**
   * succeeds
   */
  SUCC: "SUCC",

  /**
   * updates (condition)
   */
  UPDT: "UPDT",

  /**
   * Excerpts
   */
  XCRPT: "XCRPT",

  /**
   * Excerpt verbatim
   */
  VRXCRPT: "VRXCRPT",

  /**
   * transformation
   */
  XFRM: "XFRM",

  /**
   * has support
   */
  SPRT: "SPRT",

  /**
   * has bounded support
   */
  SPRTBND: "SPRTBND",

  /**
   * has subject
   */
  SUBJ: "SUBJ",

  /**
   * has qualifier
   */
  QUALF: "QUALF",

  /**
   * summarized by
   */
  SUMM: "SUMM",

  /**
   * has value
   */
  VALUE: "VALUE",

  /**
   * curative indication
   */
  CURE: "CURE",

  /**
   * adjunct curative indication
   */
  "CURE.ADJ": "CURE.ADJ",

  /**
   * adjunct mitigation
   */
  "MTGT.ADJ": "MTGT.ADJ",

  /**
   *
   */
  RACT: "RACT",

  /**
   *
   */
  SUGG: "SUGG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipTypeCode =
  typeof ActRelationshipTypeCode[keyof typeof ActRelationshipTypeCode];
