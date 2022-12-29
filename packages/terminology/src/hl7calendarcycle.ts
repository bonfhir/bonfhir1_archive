/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-HL7CalendarCycle
 */
export const HL7CalendarCycleCode = {
  /**
   * day (continuous)
   */
  daycontinuous: "CD",

  /**
   * hour (continuous)
   */
  hourcontinuous: "CH",

  /**
   * month (continuous)
   */
  monthcontinuous: "CM",

  /**
   * minute (continuous)
   */
  minutecontinuous: "CN",

  /**
   * second (continuous)
   */
  secondcontinuous: "CS",

  /**
   * week (continuous)
   */
  weekcontinuous: "CW",

  /**
   * year
   */
  year: "CY",

  /**
   * day of the month
   */
  dayofthemonth: "DM",

  /**
   * day of the week (begins with Monday)
   */
  dayoftheweekbeginswithMonday: "DW",

  /**
   * day of the year
   */
  dayoftheyear: "DY",

  /**
   * hour of the day
   */
  houroftheday: "HD",

  /**
   * month of the year
   */
  monthoftheyear: "MY",

  /**
   * minute of the hour
   */
  minuteofthehour: "NH",

  /**
   * second of the minute
   */
  secondoftheminute: "SN",

  /**
   * week of the month
   */
  weekofthemonth: "WM",

  /**
   * week of the year
   */
  weekoftheyear: "WY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HL7CalendarCycleCode =
  typeof HL7CalendarCycleCode[keyof typeof HL7CalendarCycleCode];
