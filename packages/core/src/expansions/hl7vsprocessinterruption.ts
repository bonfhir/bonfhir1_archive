/**
 * Value Set of codes specifying whether a process was interrrupted and whether a needle had been inserted in the donor's arm prior to the interruption.
 * http://terminology.hl7.org/ValueSet/v2-0923
 */
export const Hl7VSProcessInterruptionCode = {
  /**
   * Process was not interrupted
   */
  NIN: "NIN",

  /**
   * Walk Out: Process interrupted before the Phlebotomist inserts the needle in the Donor's arm
   */
  WOT: "WOT",

  /**
   * Aborted Run: Process interrupted after the Phlebotomist inserts the needle in the Donor's arm
   */
  ABR: "ABR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProcessInterruptionCode =
  typeof Hl7VSProcessInterruptionCode[keyof typeof Hl7VSProcessInterruptionCode];
