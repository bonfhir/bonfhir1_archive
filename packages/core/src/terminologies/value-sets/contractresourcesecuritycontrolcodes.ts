/**
 * This value set contract specific codes for security control.
 * http://hl7.org/fhir/ValueSet/contract-security-control
 */
export const ContractResourceSecurityControlCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractResourceSecurityControlCodesCode =
  typeof ContractResourceSecurityControlCodesCode[keyof typeof ContractResourceSecurityControlCodesCode];
