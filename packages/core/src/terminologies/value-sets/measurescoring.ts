/**
 * The scoring type of the measure.
 * http://hl7.org/fhir/ValueSet/measure-scoring
 */
export const MeasureScoringCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MeasureScoringCode =
  typeof MeasureScoringCode[keyof typeof MeasureScoringCode];
