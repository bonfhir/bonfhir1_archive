/**
 * Value Set of codes used to specify the category of adjustment and is used to assist in determining which table is used for Adjustment Reason.
 * http://terminology.hl7.org/ValueSet/v2-0564
 */
export const Hl7VSAdjustmentCategoryCodeCode = {
  /**
   * Edit/Adjudication Response
   */
  EA: "EA",

  /**
   * Information
   */
  IN: "IN",

  /**
   * Provider Adjustment
   */
  PA: "PA",

  /**
   * Processing Result
   */
  PR: "PR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAdjustmentCategoryCodeCode =
  typeof Hl7VSAdjustmentCategoryCodeCode[keyof typeof Hl7VSAdjustmentCategoryCodeCode];
