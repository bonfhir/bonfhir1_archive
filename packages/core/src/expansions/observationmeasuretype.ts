/**
 * Observation values used to indicate what kind of health quality measure is used.
 * http://terminology.hl7.org/ValueSet/v3-ObservationMeasureType
 */
export const ObservationMeasureTypeCode = {
  /**
   * ObservationMeasureType
   */
  _ObservationMeasureType: "_ObservationMeasureType",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationMeasureTypeCode =
  typeof ObservationMeasureTypeCode[keyof typeof ObservationMeasureTypeCode];
