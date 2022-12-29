/**
 * A Master Patient Index (MPI) assessment of whether a candidate patient record is a match or not.
 * http://terminology.hl7.org/ValueSet/match-grade
 */
export const MatchGradeCode = {
  /**
   * Certain Match
   */
  CertainMatch: "certain",

  /**
   * Probable Match
   */
  ProbableMatch: "probable",

  /**
   * Possible Match
   */
  PossibleMatch: "possible",

  /**
   * Certainly Not a Match
   */
  CertainlyNotaMatch: "certainly-not",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MatchGradeCode = typeof MatchGradeCode[keyof typeof MatchGradeCode];
