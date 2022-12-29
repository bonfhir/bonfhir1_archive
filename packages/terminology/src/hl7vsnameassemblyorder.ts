/**
 * Value Set of codes specifying the preferred display order of the components of this person name.
 * http://terminology.hl7.org/ValueSet/v2-0444
 */
export const Hl7VSNameAssemblyOrderCode = {
  /**
   * Prefix Given Middle Family Suffix
   */
  PrefixGivenMiddleFamilySuffix: "G",

  /**
   * Prefix Family Middle Given Suffix
   */
  PrefixFamilyMiddleGivenSuffix: "F",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSNameAssemblyOrderCode =
  typeof Hl7VSNameAssemblyOrderCode[keyof typeof Hl7VSNameAssemblyOrderCode];
