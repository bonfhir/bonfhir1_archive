/**
 * Any of the above service moods (e.g., event, intent, or goal) can be turned into a predicate used as a criterion to express conditionals (or queries.) However, currently we allow only criteria on service events.
 * http://terminology.hl7.org/ValueSet/v3-ActMoodPredicate
 */
export const ActMoodPredicateCode = {
  /**
   * criterion
   */
  CRT: "CRT",

  /**
   * event criterion
   */
  "EVN.CRT": "EVN.CRT",

  /**
   * goal criterion
   */
  "GOL.CRT": "GOL.CRT",

  /**
   * intent criterion
   */
  "INT.CRT": "INT.CRT",

  /**
   * promise criterion
   */
  "PRMS.CRT": "PRMS.CRT",

  /**
   * request criterion
   */
  "RQO.CRT": "RQO.CRT",

  /**
   * risk criterion
   */
  "RSK.CRT": "RSK.CRT",

  /**
   * expectation
   */
  EXPEC: "EXPEC",

  /**
   * Goal
   */
  GOL: "GOL",

  /**
   * risk
   */
  RSK: "RSK",

  /**
   * option
   */
  OPT: "OPT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodPredicateCode =
  typeof ActMoodPredicateCode[keyof typeof ActMoodPredicateCode];
