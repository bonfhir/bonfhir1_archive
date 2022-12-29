/**
 * A Region of Interest (ROI) specified for an image using an overlay shape. Typically used to make reference to specific regions in images, e.g., to specify the location of a radiologic finding in an image or to specify the site of a physical finding by "circling" a region in a schematic picture of a human body. The units of the coordinate values are in pixels. The origin is in the upper left hand corner, with positive X values going to the right and positive Y values going down. The relationship between a ROI and its referenced Act is specified through an ActRelationship of type "subject" (SUBJ), which must always be present.
 * http://terminology.hl7.org/ValueSet/v3-ActClassOverlayRoi
 */
export const ActClassOverlayRoiCode = {
  /**
   * overlay ROI
   */
  overlayROI: "ROIOVL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassOverlayRoiCode =
  typeof ActClassOverlayRoiCode[keyof typeof ActClassOverlayRoiCode];
