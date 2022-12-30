/**
 * Regions of Interest (ROI) within a subject Act. Primarily used for making secondary observations on a subset of a subject observation. The relationship between a ROI and its referenced Act is specified through an ActRelationship of type "subject" (SUBJ), which must always be present.
 * http://terminology.hl7.org/ValueSet/v3-ActClassROI
 */
export const ActClassROICode = {
  /**
   * bounded ROI
   */
  ROIBND: "ROIBND",

  /**
   * overlay ROI
   */
  ROIOVL: "ROIOVL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassROICode =
  typeof ActClassROICode[keyof typeof ActClassROICode];
