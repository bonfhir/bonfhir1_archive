/**
 * Value Set of codes that define a relative level of urgency applied to a patient visit.
 * http://terminology.hl7.org/ValueSet/v2-0217
 */
export const Hl7VSVisitPriorityCodeCode = {
  /**
   * Emergency
   */
  Emergency: "1",

  /**
   * Urgent
   */
  Urgent: "2",

  /**
   * Elective
   */
  Elective: "3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSVisitPriorityCodeCode =
  typeof Hl7VSVisitPriorityCodeCode[keyof typeof Hl7VSVisitPriorityCodeCode];
