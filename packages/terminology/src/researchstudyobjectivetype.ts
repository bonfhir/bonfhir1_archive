/**
 * Codes for the kind of study objective.
 * http://terminology.hl7.org/ValueSet/research-study-objective-type
 */
export const ResearchStudyObjectiveTypeCode = {
  /**
   * Primary
   */
  primary: "primary",

  /**
   * Secondary
   */
  secondary: "secondary",

  /**
   * Exploratory
   */
  exploratory: "exploratory",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResearchStudyObjectiveTypeCode =
  typeof ResearchStudyObjectiveTypeCode[keyof typeof ResearchStudyObjectiveTypeCode];
