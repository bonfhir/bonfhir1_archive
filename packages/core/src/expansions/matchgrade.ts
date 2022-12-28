/**
 * A Master Patient Index (MPI) assessment of whether a candidate patient record is a match or not.
 * http://terminology.hl7.org/ValueSet/match-grade
 */
export const MatchGradeCode = {
  /**
   * Certain Match
   */
  certain: "certain",

  /**
   * Probable Match
   */
  probable: "probable",

  /**
   * Possible Match
   */
  possible: "possible",

  /**
   * Certainly Not a Match
   */
  "certainly-not": "certainly-not",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MatchGradeCode = typeof MatchGradeCode[keyof typeof MatchGradeCode];
