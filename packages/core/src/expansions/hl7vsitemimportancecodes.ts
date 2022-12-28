/**
 * Value Set of codes that denote a level or importance of an inventory item within the context of an inventory location.
 * http://terminology.hl7.org/ValueSet/v2-0634
 */
export const Hl7VSItemImportanceCodesCode = {
  /**
   * Critical
   */
  CRT: "CRT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSItemImportanceCodesCode =
  typeof Hl7VSItemImportanceCodesCode[keyof typeof Hl7VSItemImportanceCodesCode];
