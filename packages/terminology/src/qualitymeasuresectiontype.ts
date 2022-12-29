/**
 * A type of document section within a health quality measure (aka eMeasure), used to cluster the various parts of the eMeasure into a more human navigable format.
 * http://terminology.hl7.org/ValueSet/v3-QualityMeasureSectionType
 */
export const QualityMeasureSectionTypeCode = {
  /**
   * Data criteria Narrative
   */
  DatacriteriaNarrative: "57025-9",

  /**
   * Population criteria Narrative
   */
  PopulationcriteriaNarrative: "57026-7",

  /**
   * Measure observations Narrative
   */
  MeasureobservationsNarrative: "57027-5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type QualityMeasureSectionTypeCode =
  typeof QualityMeasureSectionTypeCode[keyof typeof QualityMeasureSectionTypeCode];
