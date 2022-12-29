/**
 * **Description:** The class of the primary role by which the party is identified as the subject of an adverse event assessment.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassICSRInvestigationSubject
 */
export const RoleClassICSRInvestigationSubjectCode = {
  /**
   * Case Subject
   */
  CaseSubject: "CASEBJ",

  /**
   * Investigation Subject
   */
  InvestigationSubject: "INVSBJ",

  /**
   * patient
   */
  patient: "PAT",

  /**
   * research subject
   */
  researchsubject: "RESBJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassICSRInvestigationSubjectCode =
  typeof RoleClassICSRInvestigationSubjectCode[keyof typeof RoleClassICSRInvestigationSubjectCode];
