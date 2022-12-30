/**
 * Value Set of codes that identify the day(s) of the week when a location may be scheduled for appointments.
 * http://terminology.hl7.org/ValueSet/v2-0267
 */
export const Hl7VSDaysOfTheWeekCode = {
  /**
   * Saturday
   */
  SAT: "SAT",

  /**
   * Sunday
   */
  SUN: "SUN",

  /**
   * Monday
   */
  MON: "MON",

  /**
   * Tuesday
   */
  TUE: "TUE",

  /**
   * Wednesday
   */
  WED: "WED",

  /**
   * Thursday
   */
  THU: "THU",

  /**
   * Friday
   */
  FRI: "FRI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDaysOfTheWeekCode =
  typeof Hl7VSDaysOfTheWeekCode[keyof typeof Hl7VSDaysOfTheWeekCode];
