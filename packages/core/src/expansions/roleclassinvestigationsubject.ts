/**
 * An entity that is the subject of an investigation. This role is scoped by the party responsible for the investigation.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassInvestigationSubject
 */
export const RoleClassInvestigationSubjectCode = {
  /**
   * Investigation Subject
   */
  INVSBJ: "INVSBJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassInvestigationSubjectCode =
  typeof RoleClassInvestigationSubjectCode[keyof typeof RoleClassInvestigationSubjectCode];
