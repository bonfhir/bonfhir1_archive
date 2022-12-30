/**
 * One letter calendar cycle abbreviations (Temporary - remove when RoseTree is fixed)
 * http://terminology.hl7.org/ValueSet/v3-CalendarCycleOneLetter
 */
export const CalendarCycleOneLetterCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CalendarCycleOneLetterCode =
  typeof CalendarCycleOneLetterCode[keyof typeof CalendarCycleOneLetterCode];
