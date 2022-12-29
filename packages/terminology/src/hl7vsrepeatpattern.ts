/**
 * Value Set of codes that specify the interval between repeated services. See the Comment/Usage Note in the table below, as the table contains both precoordinated codes that may be used in an HL7 field or component and also explanatory patterns i
 * http://terminology.hl7.org/ValueSet/v2-0335
 */
export const Hl7VSRepeatPatternCode = {
  /**
   * every <integer> seconds
   */
  everyintegerseconds: "Q<integer>S",

  /**
   * every <integer> minutes
   */
  everyintegerminutes: "Q<integer>M",

  /**
   * every <integer> hours
   */
  everyintegerhours: "Q<integer>H",

  /**
   * every <integer> days
   */
  everyintegerdays: "Q<integer>D",

  /**
   * every <integer> weeks
   */
  everyintegerweeks: "Q<integer>W",

  /**
   * every <integer> months (Lunar cycle)
   */
  everyintegermonthsLunarcycle: "Q<integer>L",

  /**
   * repeats on a particular day of the week,
   */
  repeatsonaparticulardayoftheweek: "Q<integer>J<day#>",

  /**
   * twice a day at institution-specified times
   */
  twiceadayatinstitutionspecifiedtimes: "BID",

  /**
   * three times a day at institution-specified times
   */
  threetimesadayatinstitutionspecifiedtimes: "TID",

  /**
   * four times a day at institution-specified times
   */
  fourtimesadayatinstitutionspecifiedtimes: "QID",

  /**
   * "X" times per day at institution-specified times, where X is a numeral 5 or greater.
   */
  XtimesperdayatinstitutionspecifiedtimeswhereXisanumeral5orgreater: "xID",

  /**
   * in the morning at institution-specified time
   */
  inthemorningatinstitutionspecifiedtime: "QAM",

  /**
   * during each of three eight-hour shifts at institution-specified times
   */
  duringeachofthreeeighthourshiftsatinstitutionspecifiedtimes: "QSHIFT",

  /**
   * every other day
   */
  everyotherday: "QOD",

  /**
   * every day before the hour of sleep
   */
  everydaybeforethehourofsleep: "QHS",

  /**
   * in the evening at institution-specified time
   */
  intheeveningatinstitutionspecifiedtime: "QPM",

  /**
   * service is provided continuously between start time and stop time
   */
  serviceisprovidedcontinuouslybetweenstarttimeandstoptime: "C",

  /**
   * for future use, where <spec> is an interval specification as defined by the UNIX cron specification.
   */
  forfutureusewherespecisanintervalspecificationasdefinedbytheUNIXcronspecification:
    "U <spec>",

  /**
   * given as needed
   */
  givenasneeded: "PRN",

  /**
   * where xxx is some frequency code
   */
  wherexxxissomefrequencycode: "PRNxxx",

  /**
   * one time only.
   */
  onetimeonly: "Once",

  /**
   * <timing>C ("cum")<meal>
   */
  timingCcummeal: "Meal Related Timings",

  /**
   * Ante (before)
   */
  Antebefore: "A",

  /**
   * Post (after)
   */
  Postafter: "P",

  /**
   * Inter
   */
  Inter: "I",

  /**
   * Cibus Matutinus (breakfast)
   */
  CibusMatutinusbreakfast: "M",

  /**
   * Cibus Diurnus (lunch)
   */
  CibusDiurnuslunch: "D",

  /**
   * Cibus Vespertinus (dinner)
   */
  CibusVespertinusdinner: "V",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRepeatPatternCode =
  typeof Hl7VSRepeatPatternCode[keyof typeof Hl7VSRepeatPatternCode];
