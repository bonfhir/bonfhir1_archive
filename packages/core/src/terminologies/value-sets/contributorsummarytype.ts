/**
 * Used to code author list statement, contributorship statement, and such.
 * http://hl7.org/fhir/ValueSet/contributor-summary-type
 */
export const ContributorSummaryTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContributorSummaryTypeCode =
  typeof ContributorSummaryTypeCode[keyof typeof ContributorSummaryTypeCode];
