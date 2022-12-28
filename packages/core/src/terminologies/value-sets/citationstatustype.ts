/**
 * Citation status type
 * http://hl7.org/fhir/ValueSet/citation-status-type
 */
export const CitationStatusTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CitationStatusTypeCode =
  typeof CitationStatusTypeCode[keyof typeof CitationStatusTypeCode];
