/**
 * An act relationship indicating that the source act follows the target act. The source act should in principle represent the same kind of act as the target. Source and target need not have the same mood code (mood will often differ). The target of a sequel is called antecedent. Examples for sequel relationships are: revision, transformation, derivation from a prototype (as a specialization is a derivation of a generalization), followup, realization, instantiation.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipSequel
 */
export const ActRelationshipSequelCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipSequelCode =
  typeof ActRelationshipSequelCode[keyof typeof ActRelationshipSequelCode];
