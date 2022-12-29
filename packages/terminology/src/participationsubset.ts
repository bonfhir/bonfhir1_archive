/**
 * Used to indicate that the participation is a filtered subset of the total participations of the same type owned by the Act.

Used when there is a need to limit the participations to the first, the last, the next or some other filtered subset.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationSubset
 */
export const ParticipationSubsetCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationSubsetCode =
  typeof ParticipationSubsetCode[keyof typeof ParticipationSubsetCode];
