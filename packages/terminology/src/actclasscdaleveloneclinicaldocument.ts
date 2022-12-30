/**
 * A clinical document that conforms to Level One of the HL7 Clinical Document Architecture (CDA)
 * http://terminology.hl7.org/ValueSet/v3-ActClassCdaLevelOneClinicalDocument
 */
export const ActClassCdaLevelOneClinicalDocumentCode = {
  /**
   * CDA Level One clinical document
   */
  CDALVLONE: "CDALVLONE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassCdaLevelOneClinicalDocumentCode =
  typeof ActClassCdaLevelOneClinicalDocumentCode[keyof typeof ActClassCdaLevelOneClinicalDocumentCode];
