/**
 * This value set defines a set of codes that can be used to indicate the meaning/use of a reference range for a particular target population.
 * http://hl7.org/fhir/ValueSet/referencerange-meaning
 */
export const ObservationReferenceRangeMeaningCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationReferenceRangeMeaningCodesCode =
  typeof ObservationReferenceRangeMeaningCodesCode[keyof typeof ObservationReferenceRangeMeaningCodesCode];
