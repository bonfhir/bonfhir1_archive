/**
 * **Description:** The ways that product safety Investigations, about which information is captured in an Individual Case Safety Report, are related to each other. One investigation may be performed at a patient care institution, and the second by a manufacturer, a third by a regulatory agency. They may all investigate the same case and are thus related. Other kinds of relationships are replacement (if the mode of the Investigation is changed).
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipICSRInvestigation
 */
export const ActRelationshipICSRInvestigationCode = {
  /**
   * replaces
   */
  RPLC: "RPLC",

  /**
   * is sequel
   */
  SEQL: "SEQL",

  /**
   * has support
   */
  SPRT: "SPRT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipICSRInvestigationCode =
  typeof ActRelationshipICSRInvestigationCode[keyof typeof ActRelationshipICSRInvestigationCode];
