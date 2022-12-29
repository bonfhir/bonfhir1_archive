/**
 * The source Act starts after the start of the target Act (i.e. if we say "ActOne SAS ActTwo", it means that ActOne starts after the start of ActTwo, therefore ActOne is the source and ActTwo is the target).
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsAfterStartOf
 */
export const ActRelationshipStartsAfterStartOfCode = {
  /**
   * starts after start of
   */
  startsafterstartof: "SAS",

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
   * starts with, ends after end of
   */
  startswithendsafterendof: "SCWSEAE",

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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsAfterStartOfCode =
  typeof ActRelationshipStartsAfterStartOfCode[keyof typeof ActRelationshipStartsAfterStartOfCode];
