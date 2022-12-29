/**
 * A clinical document is a documentation of clinical observations and services, with the following characteristics: (1) Persistence - A clinical document continues to exist in an unaltered state, for a time period defined by local and regulatory requirements; (2) Stewardship - A clinical document is maintained by a person or organization entrusted with its care; (3) Potential for authentication - A clinical document is an assemblage of information that is intended to be legally authenticated; (4) Wholeness - Authentication of a clinical document applies to the whole and does not apply to portions of the document without the full context of the document; (5) Human readability - A clinical document is human readable."
 * http://terminology.hl7.org/ValueSet/v3-ActClassClinicalDocument
 */
export const ActClassClinicalDocumentCode = {
  /**
   * clinical document
   */
  clinicaldocument: "DOCCLIN",

  /**
   * CDA Level One clinical document
   */
  CDALevelOneclinicaldocument: "CDALVLONE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassClinicalDocumentCode =
  typeof ActClassClinicalDocumentCode[keyof typeof ActClassClinicalDocumentCode];
