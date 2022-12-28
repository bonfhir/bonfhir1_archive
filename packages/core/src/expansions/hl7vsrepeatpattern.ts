/**
 * Value Set of codes that specify the interval between repeated services. See the Comment/Usage Note in the table below, as the table contains both precoordinated codes that may be used in an HL7 field or component and also explanatory patterns i
 * http://terminology.hl7.org/ValueSet/v2-0335
 */
export const Hl7VSRepeatPatternCode = {
  /**
   * every <integer> seconds
   */
  "Q<integer>S": "Q<integer>S",

  /**
   * every <integer> minutes
   */
  "Q<integer>M": "Q<integer>M",

  /**
   * every <integer> hours
   */
  "Q<integer>H": "Q<integer>H",

  /**
   * every <integer> days
   */
  "Q<integer>D": "Q<integer>D",

  /**
   * every <integer> weeks
   */
  "Q<integer>W": "Q<integer>W",

  /**
   * every <integer> months (Lunar cycle)
   */
  "Q<integer>L": "Q<integer>L",

  /**
   * repeats on a particular day of the week,
   */
  "Q<integer>J<day#>": "Q<integer>J<day#>",

  /**
   * twice a day at institution-specified times
   */
  BID: "BID",

  /**
   * three times a day at institution-specified times
   */
  TID: "TID",

  /**
   * four times a day at institution-specified times
   */
  QID: "QID",

  /**
   * "X" times per day at institution-specified times, where X is a numeral 5 or greater.
   */
  xID: "xID",

  /**
   * in the morning at institution-specified time
   */
  QAM: "QAM",

  /**
   * during each of three eight-hour shifts at institution-specified times
   */
  QSHIFT: "QSHIFT",

  /**
   * every other day
   */
  QOD: "QOD",

  /**
   * every day before the hour of sleep
   */
  QHS: "QHS",

  /**
   * in the evening at institution-specified time
   */
  QPM: "QPM",

  /**
   * service is provided continuously between start time and stop time
   */
  C: "C",

  /**
   * for future use, where <spec> is an interval specification as defined by the UNIX cron specification.
   */
  "U <spec>": "U <spec>",

  /**
   * given as needed
   */
  PRN: "PRN",

  /**
   * where xxx is some frequency code
   */
  PRNxxx: "PRNxxx",

  /**
   * one time only.
   */
  Once: "Once",

  /**
   * <timing>C ("cum")<meal>
   */
  "Meal Related Timings": "Meal Related Timings",

  /**
   * Ante (before)
   */
  A: "A",

  /**
   * Post (after)
   */
  P: "P",

  /**
   * Inter
   */
  I: "I",

  /**
   * Cibus Matutinus (breakfast)
   */
  M: "M",

  /**
   * Cibus Diurnus (lunch)
   */
  D: "D",

  /**
   * Cibus Vespertinus (dinner)
   */
  V: "V",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRepeatPatternCode =
  typeof Hl7VSRepeatPatternCode[keyof typeof Hl7VSRepeatPatternCode];
