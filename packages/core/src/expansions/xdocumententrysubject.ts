/**
 * Used to represent the role(s) of those who can serve as subjects of the contents of a clinical document.
 * http://terminology.hl7.org/ValueSet/v3-xDocumentEntrySubject
 */
export const XDocumentEntrySubjectCode = {
  /**
   * patient
   */
  PAT: "PAT",

  /**
   * personal relationship
   */
  PRS: "PRS",

  /**
   * specimen
   */
  SPEC: "SPEC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XDocumentEntrySubjectCode =
  typeof XDocumentEntrySubjectCode[keyof typeof XDocumentEntrySubjectCode];
