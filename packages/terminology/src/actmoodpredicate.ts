/**
 * Any of the above service moods (e.g., event, intent, or goal) can be turned into a predicate used as a criterion to express conditionals (or queries.) However, currently we allow only criteria on service events.
 * http://terminology.hl7.org/ValueSet/v3-ActMoodPredicate
 */
export const ActMoodPredicateCode = {
  /**
   * criterion
   */
  criterion: "CRT",

  /**
   * event criterion
   */
  eventcriterion: "EVN.CRT",

  /**
   * goal criterion
   */
  goalcriterion: "GOL.CRT",

  /**
   * intent criterion
   */
  intentcriterion: "INT.CRT",

  /**
   * promise criterion
   */
  promisecriterion: "PRMS.CRT",

  /**
   * request criterion
   */
  requestcriterion: "RQO.CRT",

  /**
   * risk criterion
   */
  riskcriterion: "RSK.CRT",

  /**
   * expectation
   */
  expectation: "EXPEC",

  /**
   * Goal
   */
  Goal: "GOL",

  /**
   * risk
   */
  risk: "RSK",

  /**
   * option
   */
  option: "OPT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodPredicateCode =
  typeof ActMoodPredicateCode[keyof typeof ActMoodPredicateCode];
