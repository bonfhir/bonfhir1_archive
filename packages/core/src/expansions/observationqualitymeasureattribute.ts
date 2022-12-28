/**
 * Codes used to define various metadata aspects of a health quality measure.
 * http://terminology.hl7.org/ValueSet/v3-ObservationQualityMeasureAttribute
 */
export const ObservationQualityMeasureAttributeCode = {
  /**
   * ObservationQualityMeasureAttribute
   */
  _ObservationQualityMeasureAttribute: "_ObservationQualityMeasureAttribute",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationQualityMeasureAttributeCode =
  typeof ObservationQualityMeasureAttributeCode[keyof typeof ObservationQualityMeasureAttributeCode];
