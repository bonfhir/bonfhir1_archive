/**
 * Shape of the region on the object being referenced
 * http://terminology.hl7.org/ValueSet/v3-ROIOverlayShape
 */
export const ROIOverlayShapeCode = {
  /**
   * circle
   */
  circle: "CIRCLE",

  /**
   * ellipse
   */
  ellipse: "ELLIPSE",

  /**
   * point
   */
  point: "POINT",

  /**
   * polyline
   */
  polyline: "POLY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ROIOverlayShapeCode =
  typeof ROIOverlayShapeCode[keyof typeof ROIOverlayShapeCode];
