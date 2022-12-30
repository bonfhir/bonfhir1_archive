/**
 * Specifies the administrative functionality within a formal experimental design for which the ResearchSubject role was established. Examples: screening - role is used for pre-enrollment evaluation portion of the design; enrolled - role is used for subjects admitted to the active treatment portion of the design.
 * http://terminology.hl7.org/ValueSet/v3-ResearchSubjectRoleBasis
 */
export const ResearchSubjectRoleBasisCode = {
  /**
   * enrollment
   */
  ERL: "ERL",

  /**
   * screening
   */
  SCN: "SCN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResearchSubjectRoleBasisCode =
  typeof ResearchSubjectRoleBasisCode[keyof typeof ResearchSubjectRoleBasisCode];
