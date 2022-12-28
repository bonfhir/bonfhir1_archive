/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-TransdermalPatch
 */
export const TransdermalPatchCode = {
  /**
   * Transdermal Patch
   */
  TPATCH: "TPATCH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TransdermalPatchCode =
  typeof TransdermalPatchCode[keyof typeof TransdermalPatchCode];
