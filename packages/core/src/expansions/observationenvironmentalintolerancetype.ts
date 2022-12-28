/**
 * Hypersensitivity resulting in an adverse reaction upon exposure to environmental conditions.
 * http://terminology.hl7.org/ValueSet/v3-ObservationEnvironmentalIntoleranceType
 */
export const ObservationEnvironmentalIntoleranceTypeCode = {
  /**
   * Environmental Intolerance
   */
  EINT: "EINT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationEnvironmentalIntoleranceTypeCode =
  typeof ObservationEnvironmentalIntoleranceTypeCode[keyof typeof ObservationEnvironmentalIntoleranceTypeCode];
