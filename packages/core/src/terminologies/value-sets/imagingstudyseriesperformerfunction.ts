/**
 * Performer function of an agent in an imaging study series
 * http://hl7.org/fhir/ValueSet/series-performer-function
 */
export const ImagingStudySeriesPerformerFunctionCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImagingStudySeriesPerformerFunctionCode =
  typeof ImagingStudySeriesPerformerFunctionCode[keyof typeof ImagingStudySeriesPerformerFunctionCode];
