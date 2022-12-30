/**
 * Shape of the region on the object being referenced
 * http://terminology.hl7.org/ValueSet/v3-ROIOverlayShape
 */
export const ROIOverlayShapeCode = {
  /**
   * circle
   */
  CIRCLE: "CIRCLE",

  /**
   * ellipse
   */
  ELLIPSE: "ELLIPSE",

  /**
   * point
   */
  POINT: "POINT",

  /**
   * polyline
   */
  POLY: "POLY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ROIOverlayShapeCode =
  typeof ROIOverlayShapeCode[keyof typeof ROIOverlayShapeCode];
