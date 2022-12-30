/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xDocumentSubject
 */
export const XDocumentSubjectCode = {
  /**
   * patient
   */
  PAT: "PAT",

  /**
   * personal relationship
   */
  PRS: "PRS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XDocumentSubjectCode =
  typeof XDocumentSubjectCode[keyof typeof XDocumentSubjectCode];
