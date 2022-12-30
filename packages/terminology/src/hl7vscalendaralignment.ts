/**
 * Value Set of codes that specify an alignment of the repetition to a calendar (e.g., to distinguish every  30 days from "the 5th of every month").
 * http://terminology.hl7.org/ValueSet/v2-0527
 */
export const Hl7VSCalendarAlignmentCode = {
  /**
   * month of the year
   */
  MY: "MY",

  /**
   * week of the year
   */
  WY: "WY",

  /**
   * day of the month
   */
  DM: "DM",

  /**
   * day of the year
   */
  DY: "DY",

  /**
   * day of the week (begins with Monday)
   */
  DW: "DW",

  /**
   * hour of the day
   */
  HD: "HD",

  /**
   * minute of the hour
   */
  NH: "NH",

  /**
   * second of the minute
   */
  SN: "SN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCalendarAlignmentCode =
  typeof Hl7VSCalendarAlignmentCode[keyof typeof Hl7VSCalendarAlignmentCode];
