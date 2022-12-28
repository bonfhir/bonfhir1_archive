/**
 * TextureModifiedFoodType: Codes for types of foods that are texture-modified. This value set is composed SNOMED CT Concepts from SCTID 255620007 Foods (substance) and is provided as a suggestive example.
 * http://hl7.org/fhir/ValueSet/modified-foodtype
 */
export const TextureModifiedFoodTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TextureModifiedFoodTypeCodesCode =
  typeof TextureModifiedFoodTypeCodesCode[keyof typeof TextureModifiedFoodTypeCodesCode];
