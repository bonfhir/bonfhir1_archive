/**
 * This value set contract specific codes for asset subtype.
 * http://hl7.org/fhir/ValueSet/contract-assetsubtype
 */
export const ContractResourceAssetSubTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractResourceAssetSubTypeCodesCode =
  typeof ContractResourceAssetSubTypeCodesCode[keyof typeof ContractResourceAssetSubTypeCodesCode];
