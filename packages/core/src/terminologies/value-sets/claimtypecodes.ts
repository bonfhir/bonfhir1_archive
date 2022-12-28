/**
 * This value set includes Claim Type codes.
 * http://hl7.org/fhir/ValueSet/claim-type
 */
export const ClaimTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClaimTypeCodesCode =
  typeof ClaimTypeCodesCode[keyof typeof ClaimTypeCodesCode];
