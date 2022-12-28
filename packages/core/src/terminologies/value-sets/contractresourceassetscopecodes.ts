/**
 * This value set contract specific codes for asset scope.
 * http://hl7.org/fhir/ValueSet/contract-assetscope
 */
export const ContractResourceAssetScopeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractResourceAssetScopeCodesCode =
  typeof ContractResourceAssetScopeCodesCode[keyof typeof ContractResourceAssetScopeCodesCode];
