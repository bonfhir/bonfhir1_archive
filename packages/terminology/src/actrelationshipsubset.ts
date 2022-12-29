/**
 * Used to indicate that the target of the relationship will be a filtered subset of the total related set of targets.

Used when there is a need to limit the number of components to the first, the last, the next, the total, the average or some other filtered or calculated subset.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipSubset
 */
export const ActRelationshipSubsetCode = {
  /**
   * ParticipationSubset
   */
  ParticipationSubset: "_ParticipationSubset",

  /**
   * expected future
   */
  expectedfuture: "FUTURE",

  /**
   * future summary
   */
  futuresummary: "FUTSUM",

  /**
   * expected last
   */
  expectedlast: "LAST",

  /**
   * expected next
   */
  expectednext: "NEXT",

  /**
   * previous
   */
  previous: "PAST",

  /**
   * first known
   */
  firstknown: "FIRST",

  /**
   * previous summary
   */
  previoussummary: "PREVSUM",

  /**
   * most recent
   */
  mostrecent: "RECENT",

  /**
   * summary
   */
  summary: "SUM",

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
  maximum: "MAX",

  /**
   * minimum
   */
  minimum: "MIN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipSubsetCode =
  typeof ActRelationshipSubsetCode[keyof typeof ActRelationshipSubsetCode];
