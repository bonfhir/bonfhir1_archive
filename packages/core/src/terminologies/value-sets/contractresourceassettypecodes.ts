/**
 * This value set contract specific codes for asset type.
 * http://hl7.org/fhir/ValueSet/contract-assettype
 */
export const ContractResourceAssetTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractResourceAssetTypeCodesCode =
  typeof ContractResourceAssetTypeCodesCode[keyof typeof ContractResourceAssetTypeCodesCode];
