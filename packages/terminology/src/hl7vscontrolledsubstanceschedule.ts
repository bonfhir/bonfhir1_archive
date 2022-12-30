/**
 * Value Set of codes that specify the class of the drug or other substance if its usage is controlled by legislation.
 * http://terminology.hl7.org/ValueSet/v2-0477
 */
export const Hl7VSControlledSubstanceScheduleCode = {
  /**
   * Schedule I
   */
  I: "I",

  /**
   * Schedule II
   */
  II: "II",

  /**
   * Schedule III
   */
  III: "III",

  /**
   * Schedule IV
   */
  IV: "IV",

  /**
   * Schedule V
   */
  V: "V",

  /**
   * Schedule VI
   */
  VI: "VI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSControlledSubstanceScheduleCode =
  typeof Hl7VSControlledSubstanceScheduleCode[keyof typeof Hl7VSControlledSubstanceScheduleCode];
