/**
 * The composite scoring method of the measure.
 * http://hl7.org/fhir/ValueSet/composite-measure-scoring
 */
export const CompositeMeasureScoringCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CompositeMeasureScoringCode =
  typeof CompositeMeasureScoringCode[keyof typeof CompositeMeasureScoringCode];
