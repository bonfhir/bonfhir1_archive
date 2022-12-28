/**
 * Citation classification type
 * http://hl7.org/fhir/ValueSet/citation-classification-type
 */
export const CitationClassificationTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CitationClassificationTypeCode =
  typeof CitationClassificationTypeCode[keyof typeof CitationClassificationTypeCode];
