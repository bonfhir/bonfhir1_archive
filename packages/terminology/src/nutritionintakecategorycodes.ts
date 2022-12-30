/**
 * NutritionIntake Category Codes
 * http://terminology.hl7.org/ValueSet/nutrition-intake-category
 */
export const NutritionIntakeCategoryCodesCode = {
  /**
   * Inpatient
   */
  inpatient: "inpatient",

  /**
   * Outpatient
   */
  outpatient: "outpatient",

  /**
   * Community
   */
  community: "community",

  /**
   * Patient Specified
   */
  patientspecified: "patientspecified",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NutritionIntakeCategoryCodesCode =
  typeof NutritionIntakeCategoryCodesCode[keyof typeof NutritionIntakeCategoryCodesCode];
