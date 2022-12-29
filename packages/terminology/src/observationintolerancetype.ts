/**
 * Hypersensitivity resulting in an adverse reaction upon exposure to an agent.
 * http://terminology.hl7.org/ValueSet/v3-ObservationIntoleranceType
 */
export const ObservationIntoleranceTypeCode = {
  /**
   * intolerance
   */
  intolerance: "OINT",

  /**
   * Allergy
   */
  Allergy: "ALG",

  /**
   * Drug Allergy
   */
  DrugAllergy: "DALG",

  /**
   * Environmental Allergy
   */
  EnvironmentalAllergy: "EALG",

  /**
   * Food Allergy
   */
  FoodAllergy: "FALG",

  /**
   * Drug Intolerance
   */
  DrugIntolerance: "DINT",

  /**
   * Drug Non-Allergy Intolerance
   */
  DrugNonAllergyIntolerance: "DNAINT",

  /**
   * Environmental Intolerance
   */
  EnvironmentalIntolerance: "EINT",

  /**
   * Environmental Non-Allergy Intolerance
   */
  EnvironmentalNonAllergyIntolerance: "ENAINT",

  /**
   * Food Intolerance
   */
  FoodIntolerance: "FINT",

  /**
   * Food Non-Allergy Intolerance
   */
  FoodNonAllergyIntolerance: "FNAINT",

  /**
   * Non-Allergy Intolerance
   */
  NonAllergyIntolerance: "NAINT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationIntoleranceTypeCode =
  typeof ObservationIntoleranceTypeCode[keyof typeof ObservationIntoleranceTypeCode];
