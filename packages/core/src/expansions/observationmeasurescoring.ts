/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ObservationMeasureScoring
 */
export const ObservationMeasureScoringCode = {
  /**
   * ObservationMeasureScoring
   */
  _ObservationMeasureScoring: "_ObservationMeasureScoring",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationMeasureScoringCode =
  typeof ObservationMeasureScoringCode[keyof typeof ObservationMeasureScoringCode];
