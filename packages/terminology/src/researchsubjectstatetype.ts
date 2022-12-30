/**
 * Identifies the kind of state being refered to.
 * http://terminology.hl7.org/ValueSet/research-subject-state-type
 */
export const ResearchSubjectStateTypeCode = {
  /**
   * Milestone status
   */
  Milestone: "Milestone",

  /**
   * Enrollment status
   */
  Enrollment: "Enrollment",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResearchSubjectStateTypeCode =
  typeof ResearchSubjectStateTypeCode[keyof typeof ResearchSubjectStateTypeCode];
