/**
 * Value Set of codes that specify the class of the drug or other substance if its usage is controlled by legislation.
 * http://terminology.hl7.org/ValueSet/v2-0477
 */
export const Hl7VSControlledSubstanceScheduleCode = {
  /**
   * Schedule I
   */
  ScheduleI: "I",

  /**
   * Schedule II
   */
  ScheduleII: "II",

  /**
   * Schedule III
   */
  ScheduleIII: "III",

  /**
   * Schedule IV
   */
  ScheduleIV: "IV",

  /**
   * Schedule V
   */
  ScheduleV: "V",

  /**
   * Schedule VI
   */
  ScheduleVI: "VI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSControlledSubstanceScheduleCode =
  typeof Hl7VSControlledSubstanceScheduleCode[keyof typeof Hl7VSControlledSubstanceScheduleCode];
