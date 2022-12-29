/**
 * Value Set of codes used to specify the category of adjustment and is used to assist in determining which table is used for Adjustment Reason.
 * http://terminology.hl7.org/ValueSet/v2-0564
 */
export const Hl7VSAdjustmentCategoryCodeCode = {
  /**
   * Edit/Adjudication Response
   */
  EditAdjudicationResponse: "EA",

  /**
   * Information
   */
  Information: "IN",

  /**
   * Provider Adjustment
   */
  ProviderAdjustment: "PA",

  /**
   * Processing Result
   */
  ProcessingResult: "PR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAdjustmentCategoryCodeCode =
  typeof Hl7VSAdjustmentCategoryCodeCode[keyof typeof Hl7VSAdjustmentCategoryCodeCode];
