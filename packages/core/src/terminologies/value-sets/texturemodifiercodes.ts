/**
 * TextureModifier: Codes for food consistency types or texture modifications to apply to foods. This value set is composed of SNOMED CT (US Extension and Core) Concepts from SCTID 229961002 Food consistency types (substance) hierarchy and is provided as a suggestive example.
 * http://hl7.org/fhir/ValueSet/texture-code
 */
export const TextureModifierCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TextureModifierCodesCode =
  typeof TextureModifierCodesCode[keyof typeof TextureModifierCodesCode];
