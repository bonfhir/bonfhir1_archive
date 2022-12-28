/**
 * High-level categorization of the type of activity.
 * http://terminology.hl7.org/ValueSet/activity-definition-category
 */
export const ActivityDefinitionCategoryCode = {
  /**
   * Treatment
   */
  treatment: "treatment",

  /**
   * Education
   */
  education: "education",

  /**
   * Assessment
   */
  assessment: "assessment",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActivityDefinitionCategoryCode =
  typeof ActivityDefinitionCategoryCode[keyof typeof ActivityDefinitionCategoryCode];
