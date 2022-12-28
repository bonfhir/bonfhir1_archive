/**
 * This value set includes sample Information Category codes.
 * http://hl7.org/fhir/ValueSet/claim-informationcategory
 */
export const ClaimInformationCategoryCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClaimInformationCategoryCodesCode =
  typeof ClaimInformationCategoryCodesCode[keyof typeof ClaimInformationCategoryCodesCode];
