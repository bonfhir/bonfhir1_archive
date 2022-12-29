/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-CalendarCycle
 */
export const CalendarCycleCode = {
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

  /**
   * day of the month
   */
  dayofthemonth: "D",

  /**
   * hour of the day
   */
  houroftheday: "H",

  /**
   * day of the week (begins with Monday)
   */
  dayoftheweekbeginswithMonday: "J",

  /**
   * month of the year
   */
  monthoftheyear: "M",

  /**
   * minute of the hour
   */
  minuteofthehour: "N",

  /**
   * second of the minute
   */
  secondoftheminute: "S",

  /**
   * week (continuous)
   */
  weekcontinuous: "W",

  /**
   * year
   */
  year: "Y",

  /**
   * CalendarCycleOneLetter
   */
  CalendarCycleOneLetter: "_CalendarCycleOneLetter",

  /**
   * CalendarCycleTwoLetter
   */
  CalendarCycleTwoLetter: "_CalendarCycleTwoLetter",

  /**
   * GregorianCalendarCycle
   */
  GregorianCalendarCycle: "_GregorianCalendarCycle",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CalendarCycleCode =
  typeof CalendarCycleCode[keyof typeof CalendarCycleCode];
