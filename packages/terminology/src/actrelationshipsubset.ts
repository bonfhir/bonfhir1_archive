/**
 * Used to indicate that the target of the relationship will be a filtered subset of the total related set of targets.

Used when there is a need to limit the number of components to the first, the last, the next, the total, the average or some other filtered or calculated subset.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipSubset
 */
export const ActRelationshipSubsetCode = {
  /**
   * ParticipationSubset
   */
  _ParticipationSubset: "_ParticipationSubset",

  /**
   * expected future
   */
  FUTURE: "FUTURE",

  /**
   * future summary
   */
  FUTSUM: "FUTSUM",

  /**
   * expected last
   */
  LAST: "LAST",

  /**
   * expected next
   */
  NEXT: "NEXT",

  /**
   * previous
   */
  PAST: "PAST",

  /**
   * first known
   */
  FIRST: "FIRST",

  /**
   * previous summary
   */
  PREVSUM: "PREVSUM",

  /**
   * most recent
   */
  RECENT: "RECENT",

  /**
   * summary
   */
  SUM: "SUM",

  /**
   * ActRelationshipExpectedSubset
   */
  ActRelationshipExpectedSubset: "ActRelationshipExpectedSubset",

  /**
   * ActRelationshipPastSubset
   */
  ActRelationshipPastSubset: "ActRelationshipPastSubset",

  /**
   * maximum
   */
  MAX: "MAX",

  /**
   * minimum
   */
  MIN: "MIN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipSubsetCode =
  typeof ActRelationshipSubsetCode[keyof typeof ActRelationshipSubsetCode];
