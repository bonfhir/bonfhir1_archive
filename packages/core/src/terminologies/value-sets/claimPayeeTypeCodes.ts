/**
 * This value set includes sample Payee Type codes.
 * http://hl7.org/fhir/ValueSet/payeetype
 */
export const ClaimPayeeTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClaimPayeeTypeCodesCode =
  typeof ClaimPayeeTypeCodesCode[keyof typeof ClaimPayeeTypeCodesCode];
