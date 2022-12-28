/**
 * This value set contract specific codes for offer party participation.
 * http://hl7.org/fhir/ValueSet/contract-party-role
 */
export const ContractResourcePartyRoleCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractResourcePartyRoleCodesCode =
  typeof ContractResourcePartyRoleCodesCode[keyof typeof ContractResourcePartyRoleCodesCode];
