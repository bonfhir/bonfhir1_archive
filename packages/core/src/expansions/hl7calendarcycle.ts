/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-HL7CalendarCycle
 */
export const HL7CalendarCycleCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HL7CalendarCycleCode =
  typeof HL7CalendarCycleCode[keyof typeof HL7CalendarCycleCode];
