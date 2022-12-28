/**
 * The format for display of the citation.
 * http://hl7.org/fhir/ValueSet/citation-summary-style
 */
export const CitationSummaryStyleCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CitationSummaryStyleCode =
  typeof CitationSummaryStyleCode[keyof typeof CitationSummaryStyleCode];
