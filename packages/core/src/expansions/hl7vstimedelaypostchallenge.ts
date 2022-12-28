/**
 * Value Set of codes that classify an observation definition as being a component of a challenge test.
 * http://terminology.hl7.org/ValueSet/v2-0256
 */
export const Hl7VSTimeDelayPostChallengeCode = {
  /**
   * Baseline (time just before the challenge)
   */
  BS: "BS",

  /**
   * The time post drug dose at which the highest drug level is reached (differs by drug)
   */
  PEAK: "PEAK",

  /**
   * The time post drug dose at which the lowest drug level is reached (varies with drug)
   */
  TROUGH: "TROUGH",

  /**
   * Time from the challenge, or dose not specified. (random)
   */
  RANDOM: "RANDOM",

  /**
   * 1 minute post challenge
   */
  "1M": "1M",

  /**
   * 2 minutes post challenge
   */
  "2M": "2M",

  /**
   * 3 minutes post challenge
   */
  "3M": "3M",

  /**
   * 4 minutes post challenge
   */
  "4M": "4M",

  /**
   * 5 minutes post challenge
   */
  "5M": "5M",

  /**
   * 6 minutes post challenge
   */
  "6M": "6M",

  /**
   * 7 minutes post challenge
   */
  "7M": "7M",

  /**
   * 8 minutes post challenge
   */
  "8M": "8M",

  /**
   * 9 minutes post challenge
   */
  "9M": "9M",

  /**
   * 10 minutes post challenge
   */
  "10M": "10M",

  /**
   * 15 minutes post challenge
   */
  "15M": "15M",

  /**
   * 20 minutes post challenge
   */
  "20M": "20M",

  /**
   * 25 minutes post challenge
   */
  "25M": "25M",

  /**
   * 30 minutes post challenge
   */
  "30M": "30M",

  /**
   * 1 hour post challenge
   */
  "1H": "1H",

  /**
   * 2 hours post challenge
   */
  "2H": "2H",

  /**
   * 2 1/2 hours post challenge
   */
  "2.5H": "2.5H",

  /**
   * 3 hours post challenge
   */
  "3H": "3H",

  /**
   * 4 hours post challenge
   */
  "4H": "4H",

  /**
   * 5  hours post challenge
   */
  "5H": "5H",

  /**
   * 6 hours post challenge
   */
  "6H": "6H",

  /**
   * 7 hours post challenge
   */
  "7H": "7H",

  /**
   * 8 hours post challenge
   */
  "8H": "8H",

  /**
   * 8 hours aligned on nursing shifts
   */
  "8H SHIFT": "8H SHIFT",

  /**
   * 12 hours post challenge
   */
  "12H": "12H",

  /**
   * 24 hours post challenge
   */
  "24H": "24H",

  /**
   * 2 days
   */
  "2D": "2D",

  /**
   * 3 days
   */
  "3D": "3D",

  /**
   * 4 days
   */
  "4D": "4D",

  /**
   * 5 days
   */
  "5D": "5D",

  /**
   * 6 days
   */
  "6D": "6D",

  /**
   * 7 days
   */
  "7D": "7D",

  /**
   * 1 week
   */
  "1W": "1W",

  /**
   * 10 days
   */
  "10D": "10D",

  /**
   * 2 weeks
   */
  "2W": "2W",

  /**
   * 3 weeks
   */
  "3W": "3W",

  /**
   * 4 weeks
   */
  "4W": "4W",

  /**
   * 1 month (30 days) post challenge
   */
  "1L": "1L",

  /**
   * 2 months (60 days) post challenge
   */
  "2L": "2L",

  /**
   * 3 months (90 days) post challenge
   */
  "3L": "3L",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTimeDelayPostChallengeCode =
  typeof Hl7VSTimeDelayPostChallengeCode[keyof typeof Hl7VSTimeDelayPostChallengeCode];
