/**
 * Value Set of codes that specify an alignment of the repetition to a calendar (e.g., to distinguish every  30 days from "the 5th of every month").
 * http://terminology.hl7.org/ValueSet/v2-0527
 */
export const Hl7VSCalendarAlignmentCode = {
  /**
   * month of the year
   */
  monthoftheyear: "MY",

  /**
   * week of the year
   */
  weekoftheyear: "WY",

  /**
   * day of the month
   */
  dayofthemonth: "DM",

  /**
   * day of the year
   */
  dayoftheyear: "DY",

  /**
   * day of the week (begins with Monday)
   */
  dayoftheweekbeginswithMonday: "DW",

  /**
   * hour of the day
   */
  houroftheday: "HD",

  /**
   * minute of the hour
   */
  minuteofthehour: "NH",

  /**
   * second of the minute
   */
  secondoftheminute: "SN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCalendarAlignmentCode =
  typeof Hl7VSCalendarAlignmentCode[keyof typeof Hl7VSCalendarAlignmentCode];
