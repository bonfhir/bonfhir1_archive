/**
 * This value set defines a set of codes that can be used to indicate the meaning/use of a reference range for a particular target population.
 * http://terminology.hl7.org/ValueSet/referencerange-meaning
 */
export const ObservationReferenceRangeMeaningCodesCode = {
  /**
   * Type
   */
  type: "type",

  /**
   * Endocrine
   */
  endocrine: "endocrine",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationReferenceRangeMeaningCodesCode =
  typeof ObservationReferenceRangeMeaningCodesCode[keyof typeof ObservationReferenceRangeMeaningCodesCode];
