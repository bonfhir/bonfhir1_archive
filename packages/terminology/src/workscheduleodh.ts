/**
 * Describes an individual's typical arrangement of working hours for an occupation.
 * http://terminology.hl7.org/ValueSet/v3-WorkScheduleODH
 */
export const WorkScheduleODHCode = {
  /**
   * daytime shift
   */
  daytimeshift: "DS",

  /**
   * early morning shift
   */
  earlymorningshift: "EMS",

  /**
   * evening shift
   */
  eveningshift: "ES",

  /**
   * night shift
   */
  nightshift: "NS",

  /**
   * rotating shift with nights
   */
  rotatingshiftwithnights: "RSWN",

  /**
   * rotating shift without nights
   */
  rotatingshiftwithoutnights: "RSWON",

  /**
   * split shift
   */
  splitshift: "SS",

  /**
   * very long shift
   */
  verylongshift: "VLS",

  /**
   * variable shift
   */
  variableshift: "VS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type WorkScheduleODHCode =
  typeof WorkScheduleODHCode[keyof typeof WorkScheduleODHCode];
