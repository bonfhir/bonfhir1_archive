/**
 * Describes an individual's typical arrangement of working hours for an occupation.
 * http://terminology.hl7.org/ValueSet/v3-WorkScheduleODH
 */
export const WorkScheduleODHCode = {
  /**
   * daytime shift
   */
  DS: "DS",

  /**
   * early morning shift
   */
  EMS: "EMS",

  /**
   * evening shift
   */
  ES: "ES",

  /**
   * night shift
   */
  NS: "NS",

  /**
   * rotating shift with nights
   */
  RSWN: "RSWN",

  /**
   * rotating shift without nights
   */
  RSWON: "RSWON",

  /**
   * split shift
   */
  SS: "SS",

  /**
   * very long shift
   */
  VLS: "VLS",

  /**
   * variable shift
   */
  VS: "VS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type WorkScheduleODHCode =
  typeof WorkScheduleODHCode[keyof typeof WorkScheduleODHCode];
