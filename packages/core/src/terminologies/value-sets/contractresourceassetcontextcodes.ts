/**
 * This value set contract specific codes for asset context.
 * http://hl7.org/fhir/ValueSet/contract-assetcontext
 */
export const ContractResourceAssetContextCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractResourceAssetContextCodesCode =
  typeof ContractResourceAssetContextCodesCode[keyof typeof ContractResourceAssetContextCodesCode];
