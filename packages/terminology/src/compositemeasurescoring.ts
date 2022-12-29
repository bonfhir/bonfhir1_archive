/**
 * Observation values that communicate the method used in a quality measure to combine the component measure results that are included in a composite measure.

*Steward:* CQI WG
 * http://terminology.hl7.org/ValueSet/v3-CompositeMeasureScoring
 */
export const CompositeMeasureScoringCode = {
  /**
   * CompositeMeasureScoring
   */
  CompositeMeasureScoring: "_CompositeMeasureScoring",

  /**
   * All-or-nothing Scoring
   */
  AllornothingScoring: "ALLORNONESCR",

  /**
   * Linear Scoring
   */
  LinearScoring: "LINEARSCR",

  /**
   * Opportunity Scoring
   */
  OpportunityScoring: "OPPORSCR",

  /**
   * Weighted Scoring
   */
  WeightedScoring: "WEIGHTSCR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CompositeMeasureScoringCode =
  typeof CompositeMeasureScoringCode[keyof typeof CompositeMeasureScoringCode];
