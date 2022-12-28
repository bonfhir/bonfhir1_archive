/**
 * Used to code the producer or rule for creating the display string.
 * http://hl7.org/fhir/ValueSet/contributor-summary-source
 */
export const ContributorSummarySourceCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContributorSummarySourceCode =
  typeof ContributorSummarySourceCode[keyof typeof ContributorSummarySourceCode];
