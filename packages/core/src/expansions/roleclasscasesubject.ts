/**
 * A person, non-person living subject, or place that is the subject of an investigation related to a notifiable condition (health circumstance that is reportable within the applicable public health jurisdiction)
 * http://terminology.hl7.org/ValueSet/v3-RoleClassCaseSubject
 */
export const RoleClassCaseSubjectCode = {
  /**
   * Case Subject
   */
  CASEBJ: "CASEBJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassCaseSubjectCode =
  typeof RoleClassCaseSubjectCode[keyof typeof RoleClassCaseSubjectCode];
