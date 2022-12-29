/**
 * **Description:**An observation representing the degree to which the assignment of the spatial coordinates, based on a matching algorithm by a geocoding engine against a reference spatial database, matches true or accepted values.
 * http://terminology.hl7.org/ValueSet/v3-ActClassPositionAccuracy
 */
export const ActClassPositionAccuracyCode = {
  /**
   * position accuracy
   */
  positionaccuracy: "POSACC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassPositionAccuracyCode =
  typeof ActClassPositionAccuracyCode[keyof typeof ActClassPositionAccuracyCode];
