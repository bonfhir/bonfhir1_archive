/**
 * This value set contract specific codes for status.
 * http://hl7.org/fhir/ValueSet/contract-publicationstatus
 */
export const ContractResourcePublicationStatusCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractResourcePublicationStatusCodesCode =
  typeof ContractResourcePublicationStatusCodesCode[keyof typeof ContractResourcePublicationStatusCodesCode];
