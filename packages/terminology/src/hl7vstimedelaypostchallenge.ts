/**
 * Value Set of codes that classify an observation definition as being a component of a challenge test.
 * http://terminology.hl7.org/ValueSet/v2-0256
 */
export const Hl7VSTimeDelayPostChallengeCode = {
  /**
   * Baseline (time just before the challenge)
   */
  Baselinetimejustbeforethechallenge: "BS",

  /**
   * The time post drug dose at which the highest drug level is reached (differs by drug)
   */
  Thetimepostdrugdoseatwhichthehighestdruglevelisreacheddiffersbydrug: "PEAK",

  /**
   * The time post drug dose at which the lowest drug level is reached (varies with drug)
   */
  Thetimepostdrugdoseatwhichthelowestdruglevelisreachedvarieswithdrug: "TROUGH",

  /**
   * Time from the challenge, or dose not specified. (random)
   */
  Timefromthechallengeordosenotspecifiedrandom: "RANDOM",

  /**
   * 1 minute post challenge
   */
  Oneminutepostchallenge: "1M",

  /**
   * 2 minutes post challenge
   */
  Twominutespostchallenge: "2M",

  /**
   * 3 minutes post challenge
   */
  Threeminutespostchallenge: "3M",

  /**
   * 4 minutes post challenge
   */
  Fourminutespostchallenge: "4M",

  /**
   * 5 minutes post challenge
   */
  Fiveminutespostchallenge: "5M",

  /**
   * 6 minutes post challenge
   */
  Sixminutespostchallenge: "6M",

  /**
   * 7 minutes post challenge
   */
  Sevenminutespostchallenge: "7M",

  /**
   * 8 minutes post challenge
   */
  Eightminutespostchallenge: "8M",

  /**
   * 9 minutes post challenge
   */
  Nineminutespostchallenge: "9M",

  /**
   * 10 minutes post challenge
   */
  Tenminutespostchallenge: "10M",

  /**
   * 15 minutes post challenge
   */
  Fifteenminutespostchallenge: "15M",

  /**
   * 20 minutes post challenge
   */
  Twentyminutespostchallenge: "20M",

  /**
   * 25 minutes post challenge
   */
  TwentyFiveminutespostchallenge: "25M",

  /**
   * 30 minutes post challenge
   */
  Thirtyminutespostchallenge: "30M",

  /**
   * 1 hour post challenge
   */
  Onehourpostchallenge: "1H",

  /**
   * 2 hours post challenge
   */
  Twohourspostchallenge: "2H",

  /**
   * 2 1/2 hours post challenge
   */
  TwoHundredTwelvehourspostchallenge: "2.5H",

  /**
   * 3 hours post challenge
   */
  Threehourspostchallenge: "3H",

  /**
   * 4 hours post challenge
   */
  Fourhourspostchallenge: "4H",

  /**
   * 5  hours post challenge
   */
  Fivehourspostchallenge: "5H",

  /**
   * 6 hours post challenge
   */
  Sixhourspostchallenge: "6H",

  /**
   * 7 hours post challenge
   */
  Sevenhourspostchallenge: "7H",

  /**
   * 8 hours post challenge
   */
  Eighthourspostchallenge: "8H",

  /**
   * 8 hours aligned on nursing shifts
   */
  Eighthoursalignedonnursingshifts: "8H SHIFT",

  /**
   * 12 hours post challenge
   */
  Twelvehourspostchallenge: "12H",

  /**
   * 24 hours post challenge
   */
  TwentyFourhourspostchallenge: "24H",

  /**
   * 2 days
   */
  Twodays: "2D",

  /**
   * 3 days
   */
  Threedays: "3D",

  /**
   * 4 days
   */
  Fourdays: "4D",

  /**
   * 5 days
   */
  Fivedays: "5D",

  /**
   * 6 days
   */
  Sixdays: "6D",

  /**
   * 7 days
   */
  Sevendays: "7D",

  /**
   * 1 week
   */
  Oneweek: "1W",

  /**
   * 10 days
   */
  Tendays: "10D",

  /**
   * 2 weeks
   */
  Twoweeks: "2W",

  /**
   * 3 weeks
   */
  Threeweeks: "3W",

  /**
   * 4 weeks
   */
  Fourweeks: "4W",

  /**
   * 1 month (30 days) post challenge
   */
  Onemonth30dayspostchallenge: "1L",

  /**
   * 2 months (60 days) post challenge
   */
  Twomonths60dayspostchallenge: "2L",

  /**
   * 3 months (90 days) post challenge
   */
  Threemonths90dayspostchallenge: "3L",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTimeDelayPostChallengeCode =
  typeof Hl7VSTimeDelayPostChallengeCode[keyof typeof Hl7VSTimeDelayPostChallengeCode];
