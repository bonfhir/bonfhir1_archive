/**
 * Value Set of codes that describe acceptable start and end times, as well as days of the week, for appointment or resource scheduling.
 * http://terminology.hl7.org/ValueSet/v2-0294
 */
export const Hl7VSTimeSelectionCriteriaParameterClassCodesCode = {
  /**
   * The preferred start time for the appointment request, service or resource.   Any legal time specification in the format HHMM, using 24-hour clock notation
   */
  PREFSTART: "PREFSTART",

  /**
   * An indicator that there is a preferred start time for the appointment request, service or resource.
   */
  Prefstart: "Prefstart",

  /**
   * The preferred end time for the appointment request, service or resource.  Any legal time specification in the format HHMM, using 24-hour clock notation
   */
  PREFEND: "PREFEND",

  /**
   * An indicator that there is a preferred end time for the appointment request, service or resource.
   */
  Prefend: "Prefend",

  /**
   * An indicator that Monday is or is not preferred for the day on which the appointment will occur.  OK = Preferred appointment day NO = Day is not preferred
   */
  MON: "MON",

  /**
   * An indicator that Monday is or is not preferred for the day on which the appointment will occur.
   */
  Mon: "Mon",

  /**
   * An indicator that Tuesday is or is not preferred for the day on which the appointment will occur.  OK = Preferred appointment day NO = Day is not preferred
   */
  TUE: "TUE",

  /**
   * An indicator that Tuesday is or is not preferred for the day on which the appointment will occur.
   */
  Tue: "Tue",

  /**
   * An indicator that Wednesday is or is not preferred for the day on which the appointment will occur. OK = Preferred appointment day NO = Day is not preferred
   */
  WED: "WED",

  /**
   * An indicator that Wednesday is or is not preferred for the day on which the appointment will occur.
   */
  Wed: "Wed",

  /**
   * An indicator that Thursday is or is not preferred for the day on which the appointment will occur.  OK = Preferred appointment day NO = Day is not preferred
   */
  THU: "THU",

  /**
   * An indicator that Thursday is or is not preferred for the day on which the appointment will occur.
   */
  Thu: "Thu",

  /**
   * An indicator that Friday is or is not preferred for the day on which the appointment will occur.  OK =  Preferred appointment day NO = Day is not preferred
   */
  FRI: "FRI",

  /**
   * An indicator that Friday is or is not preferred for the day on which the appointment will occur.
   */
  Fri: "Fri",

  /**
   * An indicator that Saturday is or is not preferred for the day on which the appointment will occur.  OK =  Preferred appointment day NO = Day is not preferred
   */
  SAT: "SAT",

  /**
   * An indicator that Saturday is or is not preferred for the day on which the appointment will occur.
   */
  Sat: "Sat",

  /**
   * An indicator that Sunday is or is not preferred for the day on which the appointment will occur.  OK = Preferred appointment day NO = Day is not preferred
   */
  SUN: "SUN",

  /**
   * An indicator that Sunday is or is not preferred for the day on which the appointment will occur.
   */
  Sun: "Sun",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTimeSelectionCriteriaParameterClassCodesCode =
  typeof Hl7VSTimeSelectionCriteriaParameterClassCodesCode[keyof typeof Hl7VSTimeSelectionCriteriaParameterClassCodesCode];
