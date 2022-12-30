/**
 * **Description:**An observation representing one of a set of numerical values used to determine the position of a place. The name of the coordinate value is determined by the reference coordinate system.
 * http://terminology.hl7.org/ValueSet/v3-ActClassPositionCoordinate
 */
export const ActClassPositionCoordinateCode = {
  /**
   * position coordinate
   */
  POSCOORD: "POSCOORD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassPositionCoordinateCode =
  typeof ActClassPositionCoordinateCode[keyof typeof ActClassPositionCoordinateCode];
