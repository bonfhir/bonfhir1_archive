/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-TransdermalPatch
 */
export const TransdermalPatchCode = {
  /**
   * Transdermal Patch
   */
  TPATCH: "TPATCH",

  /**
   * 16 Hour Transdermal Patch
   */
  TPATH16: "TPATH16",

  /**
   * 24 Hour Transdermal Patch
   */
  TPATH24: "TPATH24",

  /**
   * Biweekly Transdermal Patch
   */
  TPATH2WK: "TPATH2WK",

  /**
   * 72 Hour Transdermal Patch
   */
  TPATH72: "TPATH72",

  /**
   * Weekly Transdermal Patch
   */
  TPATHWK: "TPATHWK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TransdermalPatchCode =
  typeof TransdermalPatchCode[keyof typeof TransdermalPatchCode];
