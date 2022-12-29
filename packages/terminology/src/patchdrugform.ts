/**
 * A drug delivery system that contains an adhesived backing and that permits its ingredients to diffuse from some portion of it (e.g., the backing itself, a reservoir, the adhesive, or some other component) into the body from the external site where it is applied.
 * http://terminology.hl7.org/ValueSet/v3-PatchDrugForm
 */
export const PatchDrugFormCode = {
  /**
   * Patch
   */
  Patch: "PATCH",

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
export type PatchDrugFormCode =
  typeof PatchDrugFormCode[keyof typeof PatchDrugFormCode];
