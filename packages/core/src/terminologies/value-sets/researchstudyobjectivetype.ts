/**
 * Codes for the kind of study objective.
 * http://hl7.org/fhir/ValueSet/research-study-objective-type
 */
export const ResearchStudyObjectiveTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResearchStudyObjectiveTypeCode =
  typeof ResearchStudyObjectiveTypeCode[keyof typeof ResearchStudyObjectiveTypeCode];
