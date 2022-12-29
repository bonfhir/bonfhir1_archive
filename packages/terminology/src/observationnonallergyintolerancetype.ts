/**
 * Hypersensitivity to an agent caused by a mechanism other than an immunologic response to an initial exposure
 * http://terminology.hl7.org/ValueSet/v3-ObservationNonAllergyIntoleranceType
 */
export const ObservationNonAllergyIntoleranceTypeCode = {
  /**
   * Non-Allergy Intolerance
   */
  NonAllergyIntolerance: "NAINT",

  /**
   * Drug Non-Allergy Intolerance
   */
  DrugNonAllergyIntolerance: "DNAINT",

  /**
   * Environmental Non-Allergy Intolerance
   */
  EnvironmentalNonAllergyIntolerance: "ENAINT",

  /**
   * Food Non-Allergy Intolerance
   */
  FoodNonAllergyIntolerance: "FNAINT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationNonAllergyIntoleranceTypeCode =
  typeof ObservationNonAllergyIntoleranceTypeCode[keyof typeof ObservationNonAllergyIntoleranceTypeCode];
