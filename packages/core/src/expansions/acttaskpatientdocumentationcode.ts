/**
 * A person enters documentation about a given patient.
 * http://terminology.hl7.org/ValueSet/v3-ActTaskPatientDocumentationCode
 */
export const ActTaskPatientDocumentationCodeCode = {
  /**
   * patient documentation task
   */
  PATDOC: "PATDOC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActTaskPatientDocumentationCodeCode =
  typeof ActTaskPatientDocumentationCodeCode[keyof typeof ActTaskPatientDocumentationCodeCode];
