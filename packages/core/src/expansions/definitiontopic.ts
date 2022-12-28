/**
 * High-level categorization of the definition, used for searching, sorting, and filtering.
 * http://terminology.hl7.org/ValueSet/definition-topic
 */
export const DefinitionTopicCode = {
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
export type DefinitionTopicCode =
  typeof DefinitionTopicCode[keyof typeof DefinitionTopicCode];
