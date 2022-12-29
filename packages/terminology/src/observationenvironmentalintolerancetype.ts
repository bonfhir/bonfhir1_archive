/**
 * Hypersensitivity resulting in an adverse reaction upon exposure to environmental conditions.
 * http://terminology.hl7.org/ValueSet/v3-ObservationEnvironmentalIntoleranceType
 */
export const ObservationEnvironmentalIntoleranceTypeCode = {
  /**
   * Environmental Intolerance
   */
  EnvironmentalIntolerance: "EINT",

  /**
   * Environmental Allergy
   */
  EnvironmentalAllergy: "EALG",

  /**
   * Environmental Non-Allergy Intolerance
   */
  EnvironmentalNonAllergyIntolerance: "ENAINT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationEnvironmentalIntoleranceTypeCode =
  typeof ObservationEnvironmentalIntoleranceTypeCode[keyof typeof ObservationEnvironmentalIntoleranceTypeCode];
