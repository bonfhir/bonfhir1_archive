/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-TransdermalPatch
 */
export const TransdermalPatchCode = {
  /**
   * Transdermal Patch
   */
  TransdermalPatch: "TPATCH",

  /**
   * 16 Hour Transdermal Patch
   */
  SixteenHourTransdermalPatch: "TPATH16",

  /**
   * 24 Hour Transdermal Patch
   */
  TwentyFourHourTransdermalPatch: "TPATH24",

  /**
   * Biweekly Transdermal Patch
   */
  BiweeklyTransdermalPatch: "TPATH2WK",

  /**
   * 72 Hour Transdermal Patch
   */
  SeventyTwoHourTransdermalPatch: "TPATH72",

  /**
   * Weekly Transdermal Patch
   */
  WeeklyTransdermalPatch: "TPATHWK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TransdermalPatchCode =
  typeof TransdermalPatchCode[keyof typeof TransdermalPatchCode];
