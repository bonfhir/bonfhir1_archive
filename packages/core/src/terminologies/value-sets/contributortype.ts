/**
 * The type of contributor.
 * http://hl7.org/fhir/ValueSet/contributor-type
 */
export const ContributorTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContributorTypeCode =
  typeof ContributorTypeCode[keyof typeof ContributorTypeCode];
