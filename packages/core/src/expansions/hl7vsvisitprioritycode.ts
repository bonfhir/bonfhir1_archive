/**
 * Value Set of codes that define a relative level of urgency applied to a patient visit.
 * http://terminology.hl7.org/ValueSet/v2-0217
 */
export const Hl7VSVisitPriorityCodeCode = {
  /**
   * Emergency
   */
  "1": "1",

  /**
   * Urgent
   */
  "2": "2",

  /**
   * Elective
   */
  "3": "3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSVisitPriorityCodeCode =
  typeof Hl7VSVisitPriorityCodeCode[keyof typeof Hl7VSVisitPriorityCodeCode];
