/**
 * Used to code the format of the display string.
 * http://hl7.org/fhir/ValueSet/contributor-summary-style
 */
export const ContributorSummaryStyleCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContributorSummaryStyleCode =
  typeof ContributorSummaryStyleCode[keyof typeof ContributorSummaryStyleCode];
