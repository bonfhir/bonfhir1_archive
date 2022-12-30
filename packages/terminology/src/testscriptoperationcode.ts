/**
 * This value set defines a set of codes that are used to indicate the supported operations of a testing engine or tool.
 * http://terminology.hl7.org/ValueSet/testscript-operation-codes
 */
export const TestScriptOperationCodeCode = {
  /**
   * Read
   */
  read: "read",

  /**
   * Version Read
   */
  vread: "vread",

  /**
   * Update
   */
  update: "update",

  /**
   * Create using Update
   */
  updateCreate: "updateCreate",

  /**
   * Patch
   */
  patch: "patch",

  /**
   * Delete
   */
  delete: "delete",

  /**
   * Conditional Delete Single
   */
  deleteCondSingle: "deleteCondSingle",

  /**
   * Conditional Delete Multiple
   */
  deleteCondMultiple: "deleteCondMultiple",

  /**
   * History
   */
  history: "history",

  /**
   * Create
   */
  create: "create",

  /**
   * Search
   */
  search: "search",

  /**
   * Batch
   */
  batch: "batch",

  /**
   * Transaction
   */
  transaction: "transaction",

  /**
   * Capabilities
   */
  capabilities: "capabilities",

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
  "find-matches": "find-matches",

  /**
   * $conforms
   */
  conforms: "conforms",

  /**
   * $data-requirements
   */
  "data-requirements": "data-requirements",

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
  "evaluate-measure": "evaluate-measure",

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
  "meta-add": "meta-add",

  /**
   * $meta-delete
   */
  "meta-delete": "meta-delete",

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
  "process-message": "process-message",

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
  "validate-code": "validate-code",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TestScriptOperationCodeCode =
  typeof TestScriptOperationCodeCode[keyof typeof TestScriptOperationCodeCode];
