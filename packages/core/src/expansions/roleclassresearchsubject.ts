/**
 * **Definition:**Specifies the administrative functionality within a formal experimental design for which the ResearchSubject role was established.

**Examples:** Screening - role is used for pre-enrollment evaluation portion of the design; enrolled - role is used for subjects admitted to the experimental portion of the design.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassResearchSubject
 */
export const RoleClassResearchSubjectCode = {
  /**
   * research subject
   */
  RESBJ: "RESBJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassResearchSubjectCode =
  typeof RoleClassResearchSubjectCode[keyof typeof RoleClassResearchSubjectCode];
