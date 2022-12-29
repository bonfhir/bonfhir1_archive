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
  actrelationshiptype: "ART",

  /**
   * ActClassTemporallyPertains
   */
  ActClassTemporallyPertains: "_ActClassTemporallyPertains",

  /**
   * ActRelationshipTemporallyPertainsEnd
   */
  ActRelationshipTemporallyPertainsEnd: "_ActRelationshipTemporallyPertainsEnd",

  /**
   * ActRelationshipTemporallyPertainsStart
   */
  ActRelationshipTemporallyPertainsStart:
    "_ActRelationshipTemporallyPertainsStart",

  /**
   * ActClassTemporallyPertains
   */
  ActClassTemporallyPertains: "TemporallyPertains",

  /**
   * ActRelationshipAccounting
   */
  ActRelationshipAccounting: "_ActRelationshipAccounting",

  /**
   * ActRelationshipCostTracking
   */
  ActRelationshipCostTracking: "_ActRelationshipCostTracking",

  /**
   * has charge
   */
  hascharge: "CHRG",

  /**
   * has cost
   */
  hascost: "COST",

  /**
   * ActRelationshipPosting
   */
  ActRelationshipPosting: "_ActRelationshipPosting",

  /**
   * has credit
   */
  hascredit: "CREDIT",

  /**
   * has debit
   */
  hasdebit: "DEBIT",

  /**
   * ActRelationshipAccounting
   */
  ActRelationshipAccounting: "_ActRelationshipPosts",

  /**
   * ActRelationshipConditional
   */
  ActRelationshipConditional: "_ActRelationshipConditional",

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

  /**
   * ActRelationshipTemporallyPertains
   */
  ActRelationshipTemporallyPertains: "_ActRelationshipTemporallyPertains",

  /**
   * ActRelationshipTemporallyPertainsApproximates
   */
  ActRelationshipTemporallyPertainsApproximates:
    "_ActRelationshipTemporallyPertainsApproximates",

  /**
   * ends near end
   */
  endsnearend: "ENE",

  /**
   * ends concurrent with
   */
  endsconcurrentwith: "ECW",

  /**
   * concurrent with
   */
  concurrentwith: "CONCURRENT",

  /**
   * starts before start of, ends with
   */
  startsbeforestartofendswith: "SBSECWE",

  /**
   * ends near start
   */
  endsnearstart: "ENS",

  /**
   * ends concurrent with start of
   */
  endsconcurrentwithstartof: "ECWS",

  /**
   * starts near end
   */
  startsnearend: "SNE",

  /**
   * starts concurrent with end of
   */
  startsconcurrentwithendof: "SCWE",

  /**
   * starts near start
   */
  startsnearstart: "SNS",

  /**
   * starts concurrent with
   */
  startsconcurrentwith: "SCW",

  /**
   * starts with. ends before end of
   */
  startswithendsbeforeendof: "SCWSEBE",

  /**
   * starts with, ends after end of
   */
  startswithendsafterendof: "SCWSEAE",

  /**
   * ends after start of
   */
  endsafterstartof: "EAS",

  /**
   * ends after end of
   */
  endsafterendof: "EAE",

  /**
   * starts after start of, ends after end of
   */
  startsafterstartofendsafterendof: "SASEAE",

  /**
   * contains end of
   */
  containsendof: "SBEEAE",

  /**
   * start after start of, contains end of
   */
  startafterstartofcontainsendof: "SASSBEEAS",

  /**
   * contains time of
   */
  containstimeof: "SBSEAE",

  /**
   * starts after start of
   */
  startsafterstartof: "SAS",

  /**
   * starts after end of
   */
  startsafterendof: "SAE",

  /**
   * occurs during
   */
  occursduring: "DURING",

  /**
   * starts after start of, ends with
   */
  startsafterstartofendswith: "SASECWE",

  /**
   * ends after or concurrent with start of
   */
  endsafterorconcurrentwithstartof: "EASORECWS",

  /**
   * ends after or concurrent with end of
   */
  endsafterorconcurrentwithendof: "EAEORECW",

  /**
   * independent of time of
   */
  independentoftimeof: "INDEPENDENT",

  /**
   * starts after or concurrent with end of
   */
  startsafterorconcurrentwithendof: "SAEORSCWE",

  /**
   * starts after or concurrent with start of
   */
  startsafterorconcurrentwithstartof: "SASORSCW",

  /**
   * starts before or concurrent with end of
   */
  startsbeforeorconcurrentwithendof: "SBEORSCWE",

  /**
   * overlaps with
   */
  overlapswith: "OVERLAP",

  /**
   * ends during
   */
  endsduring: "EDU",

  /**
   * contains start of, ends before end of
   */
  containsstartofendsbeforeendof: "SBSEASEBE",

  /**
   * contains start of
   */
  containsstartof: "SBSEAS",

  /**
   * starts during
   */
  startsduring: "SDU",

  /**
   * starts before end of
   */
  startsbeforeendof: "SBE",

  /**
   * ends before end of
   */
  endsbeforeendof: "EBE",

  /**
   * starts before start of, ends before end of
   */
  startsbeforestartofendsbeforeendof: "SBSEBE",

  /**
   * ends before or concurrent with start of
   */
  endsbeforeorconcurrentwithstartof: "EBSORECWS",

  /**
   * ends before start of
   */
  endsbeforestartof: "EBS",

  /**
   * ends before or concurrent with end of
   */
  endsbeforeorconcurrentwithendof: "EBEORECW",

  /**
   * starts before or concurrent with start of
   */
  startsbeforeorconcurrentwithstartof: "SBSORSCW",

  /**
   * starts before start of
   */
  startsbeforestartof: "SBS",

  /**
   * authorized by
   */
  authorizedby: "AUTH",

  /**
   * is etiology for
   */
  isetiologyfor: "CAUS",

  /**
   * has component
   */
  hascomponent: "COMP",

  /**
   * has control variable
   */
  hascontrolvariable: "CTRLV",

  /**
   * has member
   */
  hasmember: "MBR",

  /**
   * has step
   */
  hasstep: "STEP",

  /**
   * arrival
   */
  arrival: "ARR",

  /**
   * departure
   */
  departure: "DEP",

  /**
   * has part
   */
  haspart: "PART",

  /**
   * covered by
   */
  coveredby: "COVBY",

  /**
   * is derived from
   */
  isderivedfrom: "DRIV",

  /**
   * episodeLink
   */
  episodeLink: "ELNK",

  /**
   * provides evidence for
   */
  providesevidencefor: "EVID",

  /**
   * exacerbated by
   */
  exacerbatedby: "EXACBY",

  /**
   * has explanation
   */
  hasexplanation: "EXPL",

  /**
   * interfered by
   */
  interferedby: "INTF",

  /**
   * items located
   */
  itemslocated: "ITEMSLOC",

  /**
   * limited by
   */
  limitedby: "LIMIT",

  /**
   * has metadata
   */
  hasmetadata: "META",

  /**
   * is manifestation of
   */
  ismanifestationof: "MFST",

  /**
   * assigns name
   */
  assignsname: "NAME",

  /**
   * has outcome
   */
  hasoutcome: "OUTC",

  /**
   * Act Relationsip Objective
   */
  ActRelationsipObjective: "_ActRelationsipObjective",

  /**
   * has continuing objective
   */
  hascontinuingobjective: "OBJC",

  /**
   * has final objective
   */
  hasfinalobjective: "OBJF",

  /**
   * has goal
   */
  hasgoal: "GOAL",

  /**
   * has risk
   */
  hasrisk: "RISK",

  /**
   * has pertinent information
   */
  haspertinentinformation: "PERT",

  /**
   * has previous instance
   */
  haspreviousinstance: "PREV",

  /**
   * refers to
   */
  refersto: "REFR",

  /**
   * uses
   */
  uses: "USE",

  /**
   * has reference values
   */
  hasreferencevalues: "REFV",

  /**
   * relieved by
   */
  relievedby: "RELVBY",

  /**
   * is sequel
   */
  issequel: "SEQL",

  /**
   * is appendage
   */
  isappendage: "APND",

  /**
   * has baseline
   */
  hasbaseline: "BSLN",

  /**
   * complies with
   */
  complieswith: "COMPLY",

  /**
   * documents
   */
  documents: "DOC",

  /**
   * fulfills
   */
  fulfills: "FLFS",

  /**
   * occurrence
   */
  occurrence: "OCCR",

  /**
   * references order
   */
  referencesorder: "OREF",

  /**
   * schedules request
   */
  schedulesrequest: "SCH",

  /**
   * has generalization
   */
  hasgeneralization: "GEN",

  /**
   * evaluates (goal)
   */
  evaluatesgoal: "GEVL",

  /**
   * instantiates (master)
   */
  instantiatesmaster: "INST",

  /**
   * modifies
   */
  modifies: "MOD",

  /**
   * matches (trigger)
   */
  matchestrigger: "MTCH",

  /**
   * has option
   */
  hasoption: "OPTN",

  /**
   * re-challenge
   */
  rechallenge: "RCHAL",

  /**
   * reverses
   */
  reverses: "REV",

  /**
   * replaces
   */
  replaces: "RPLC",

  /**
   * succeeds
   */
  succeeds: "SUCC",

  /**
   * updates (condition)
   */
  updatescondition: "UPDT",

  /**
   * Excerpts
   */
  Excerpts: "XCRPT",

  /**
   * Excerpt verbatim
   */
  Excerptverbatim: "VRXCRPT",

  /**
   * transformation
   */
  transformation: "XFRM",

  /**
   * has support
   */
  hassupport: "SPRT",

  /**
   * has bounded support
   */
  hasboundedsupport: "SPRTBND",

  /**
   * has subject
   */
  hassubject: "SUBJ",

  /**
   * has qualifier
   */
  hasqualifier: "QUALF",

  /**
   * summarized by
   */
  summarizedby: "SUMM",

  /**
   * has value
   */
  hasvalue: "VALUE",

  /**
   * curative indication
   */
  curativeindication: "CURE",

  /**
   * adjunct curative indication
   */
  adjunctcurativeindication: "CURE.ADJ",

  /**
   * adjunct mitigation
   */
  adjunctmitigation: "MTGT.ADJ",

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
