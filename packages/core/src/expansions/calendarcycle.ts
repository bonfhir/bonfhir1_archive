/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-CalendarCycle
 */
export const CalendarCycleCode = {
  /**
   * day (continuous)
   */
  CD: "CD",

  /**
   * hour (continuous)
   */
  CH: "CH",

  /**
   * month (continuous)
   */
  CM: "CM",

  /**
   * minute (continuous)
   */
  CN: "CN",

  /**
   * second (continuous)
   */
  CS: "CS",

  /**
   * week (continuous)
   */
  CW: "CW",

  /**
   * year
   */
  CY: "CY",

  /**
   * day of the month
   */
  DM: "DM",

  /**
   * day of the week (begins with Monday)
   */
  DW: "DW",

  /**
   * day of the year
   */
  DY: "DY",

  /**
   * hour of the day
   */
  HD: "HD",

  /**
   * month of the year
   */
  MY: "MY",

  /**
   * minute of the hour
   */
  NH: "NH",

  /**
   * second of the minute
   */
  SN: "SN",

  /**
   * week of the month
   */
  WM: "WM",

  /**
   * week of the year
   */
  WY: "WY",

  /**
   * day of the month
   */
  D: "D",

  /**
   * hour of the day
   */
  H: "H",

  /**
   * day of the week (begins with Monday)
   */
  J: "J",

  /**
   * month of the year
   */
  M: "M",

  /**
   * minute of the hour
   */
  N: "N",

  /**
   * second of the minute
   */
  S: "S",

  /**
   * week (continuous)
   */
  W: "W",

  /**
   * year
   */
  Y: "Y",

  /**
   * CalendarCycleOneLetter
   */
  _CalendarCycleOneLetter: "_CalendarCycleOneLetter",

  /**
   * CalendarCycleTwoLetter
   */
  _CalendarCycleTwoLetter: "_CalendarCycleTwoLetter",

  /**
   * GregorianCalendarCycle
   */
  _GregorianCalendarCycle: "_GregorianCalendarCycle",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CalendarCycleCode =
  typeof CalendarCycleCode[keyof typeof CalendarCycleCode];
