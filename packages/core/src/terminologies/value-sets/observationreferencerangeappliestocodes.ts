/**
 * This value set defines a set of codes that can be used to indicate the particular target population the reference range applies to.
 * http://hl7.org/fhir/ValueSet/referencerange-appliesto
 */
export const ObservationReferenceRangeAppliesToCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationReferenceRangeAppliesToCodesCode =
  typeof ObservationReferenceRangeAppliesToCodesCode[keyof typeof ObservationReferenceRangeAppliesToCodesCode];
