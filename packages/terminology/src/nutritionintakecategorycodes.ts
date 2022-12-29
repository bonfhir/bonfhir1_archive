/**
 * NutritionIntake Category Codes
 * http://terminology.hl7.org/ValueSet/nutrition-intake-category
 */
export const NutritionIntakeCategoryCodesCode = {
  /**
   * Inpatient
   */
  Inpatient: "inpatient",

  /**
   * Outpatient
   */
  Outpatient: "outpatient",

  /**
   * Community
   */
  Community: "community",

  /**
   * Patient Specified
   */
  PatientSpecified: "patientspecified",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NutritionIntakeCategoryCodesCode =
  typeof NutritionIntakeCategoryCodesCode[keyof typeof NutritionIntakeCategoryCodesCode];
