/**
 * One letter calendar cycle abbreviations (Temporary - remove when RoseTree is fixed)
 * http://terminology.hl7.org/ValueSet/v3-CalendarCycleOneLetter
 */
export const CalendarCycleOneLetterCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CalendarCycleOneLetterCode =
  typeof CalendarCycleOneLetterCode[keyof typeof CalendarCycleOneLetterCode];
