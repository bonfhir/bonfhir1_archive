/**
 * This value set defines a set of codes that are used to indicate the supported operations of a testing engine or tool.
 * http://terminology.hl7.org/ValueSet/testscript-operation-codes
 */
export const TestScriptOperationCodeCode = {
  /**
   * Read
   */
  Read: "read",

  /**
   * Version Read
   */
  VersionRead: "vread",

  /**
   * Update
   */
  Update: "update",

  /**
   * Create using Update
   */
  CreateusingUpdate: "updateCreate",

  /**
   * Patch
   */
  Patch: "patch",

  /**
   * Delete
   */
  Delete: "delete",

  /**
   * Conditional Delete Single
   */
  ConditionalDeleteSingle: "deleteCondSingle",

  /**
   * Conditional Delete Multiple
   */
  ConditionalDeleteMultiple: "deleteCondMultiple",

  /**
   * History
   */
  History: "history",

  /**
   * Create
   */
  Create: "create",

  /**
   * Search
   */
  Search: "search",

  /**
   * Batch
   */
  Batch: "batch",

  /**
   * Transaction
   */
  Transaction: "transaction",

  /**
   * Capabilities
   */
  Capabilities: "capabilities",

  /**
   * $apply
   */
  apply: "apply",

  /**
   * $closure
   */
  closure: "closure",

  /**
   * $find-matches
   */
  findmatches: "find-matches",

  /**
   * $conforms
   */
  conforms: "conforms",

  /**
   * $data-requirements
   */
  datarequirements: "data-requirements",

  /**
   * $document
   */
  document: "document",

  /**
   * $evaluate
   */
  evaluate: "evaluate",

  /**
   * $evaluate-measure
   */
  evaluatemeasure: "evaluate-measure",

  /**
   * $everything
   */
  everything: "everything",

  /**
   * $expand
   */
  expand: "expand",

  /**
   * $find
   */
  find: "find",

  /**
   * $graphql
   */
  graphql: "graphql",

  /**
   * $implements
   */
  implements: "implements",

  /**
   * $lastn
   */
  lastn: "lastn",

  /**
   * $lookup
   */
  lookup: "lookup",

  /**
   * $match
   */
  match: "match",

  /**
   * $meta
   */
  meta: "meta",

  /**
   * $meta-add
   */
  metaadd: "meta-add",

  /**
   * $meta-delete
   */
  metadelete: "meta-delete",

  /**
   * $populate
   */
  populate: "populate",

  /**
   * $populatehtml
   */
  populatehtml: "populatehtml",

  /**
   * $populatelink
   */
  populatelink: "populatelink",

  /**
   * $process-message
   */
  processmessage: "process-message",

  /**
   * $questionnaire
   */
  questionnaire: "questionnaire",

  /**
   * $stats
   */
  stats: "stats",

  /**
   * $subset
   */
  subset: "subset",

  /**
   * $subsumes
   */
  subsumes: "subsumes",

  /**
   * $transform
   */
  transform: "transform",

  /**
   * $translate
   */
  translate: "translate",

  /**
   * $validate
   */
  validate: "validate",

  /**
   * $validate-code
   */
  validatecode: "validate-code",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TestScriptOperationCodeCode =
  typeof TestScriptOperationCodeCode[keyof typeof TestScriptOperationCodeCode];
