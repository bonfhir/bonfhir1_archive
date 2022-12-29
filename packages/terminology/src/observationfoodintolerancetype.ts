/**
 * Hypersensitivity resulting in an adverse reaction upon exposure to food.
 * http://terminology.hl7.org/ValueSet/v3-ObservationFoodIntoleranceType
 */
export const ObservationFoodIntoleranceTypeCode = {
  /**
   * Food Intolerance
   */
  FoodIntolerance: "FINT",

  /**
   * Food Allergy
   */
  FoodAllergy: "FALG",

  /**
   * Food Non-Allergy Intolerance
   */
  FoodNonAllergyIntolerance: "FNAINT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationFoodIntoleranceTypeCode =
  typeof ObservationFoodIntoleranceTypeCode[keyof typeof ObservationFoodIntoleranceTypeCode];
