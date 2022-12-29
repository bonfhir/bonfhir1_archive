/**
 * MedicationRequest Course of Therapy Codes
 * http://terminology.hl7.org/ValueSet/medicationrequest-course-of-therapy
 */
export const MedicationRequestCourseOfTherapyCodesCode = {
  /**
   * Continuous long term therapy
   */
  Continuouslongtermtherapy: "continuous",

  /**
   * Short course (acute) therapy
   */
  Shortcourseacutetherapy: "acute",

  /**
   * Seasonal
   */
  Seasonal: "seasonal",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationRequestCourseOfTherapyCodesCode =
  typeof MedicationRequestCourseOfTherapyCodesCode[keyof typeof MedicationRequestCourseOfTherapyCodesCode];
