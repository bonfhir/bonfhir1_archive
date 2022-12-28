/**
 * MedicationRequest Course of Therapy Codes
 * http://terminology.hl7.org/ValueSet/medicationrequest-course-of-therapy
 */
export const MedicationRequestCourseOfTherapyCodesCode = {
  /**
   * Continuous long term therapy
   */
  continuous: "continuous",

  /**
   * Short course (acute) therapy
   */
  acute: "acute",

  /**
   * Seasonal
   */
  seasonal: "seasonal",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationRequestCourseOfTherapyCodesCode =
  typeof MedicationRequestCourseOfTherapyCodesCode[keyof typeof MedicationRequestCourseOfTherapyCodesCode];
