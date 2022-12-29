/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipEndsAfterStartOf
 */
export const ActRelationshipEndsAfterStartOfCode = {
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
   * starts with, ends after end of
   */
  startswithendsafterendof: "SCWSEAE",

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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipEndsAfterStartOfCode =
  typeof ActRelationshipEndsAfterStartOfCode[keyof typeof ActRelationshipEndsAfterStartOfCode];
