/**
 * Hypersensitivity resulting in an adverse reaction upon exposure to food.
 * http://terminology.hl7.org/ValueSet/v3-ObservationFoodIntoleranceType
 */
export const ObservationFoodIntoleranceTypeCode = {
  /**
   * Food Intolerance
   */
  FINT: "FINT",

  /**
   * Food Allergy
   */
  FALG: "FALG",

  /**
   * Food Non-Allergy Intolerance
   */
  FNAINT: "FNAINT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationFoodIntoleranceTypeCode =
  typeof ObservationFoodIntoleranceTypeCode[keyof typeof ObservationFoodIntoleranceTypeCode];
