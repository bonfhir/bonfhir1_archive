/**
 * An act relationship indicating that the source act follows the target act. The source act should in principle represent the same kind of act as the target. Source and target need not have the same mood code (mood will often differ). The target of a sequel is called antecedent. Examples for sequel relationships are: revision, transformation, derivation from a prototype (as a specialization is a derivation of a generalization), followup, realization, instantiation.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipSequel
 */
export const ActRelationshipSequelCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipSequelCode =
  typeof ActRelationshipSequelCode[keyof typeof ActRelationshipSequelCode];
