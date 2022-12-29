/**
 * Value Set of codes that specify the reason the staff member is inactive.
 * http://terminology.hl7.org/ValueSet/v2-0540
 */
export const Hl7VSInactiveReasonCodeCode = {
  /**
   * Leave of Absence
   */
  LeaveofAbsence: "L",

  /**
   * Termination
   */
  Termination: "T",

  /**
   * Retired
   */
  Retired: "R",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSInactiveReasonCodeCode =
  typeof Hl7VSInactiveReasonCodeCode[keyof typeof Hl7VSInactiveReasonCodeCode];
