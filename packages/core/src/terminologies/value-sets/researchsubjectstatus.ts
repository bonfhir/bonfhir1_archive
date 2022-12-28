/**
 * Indicates the progression of a study subject through a study.
 * http://hl7.org/fhir/ValueSet/research-subject-status
 */
export const ResearchSubjectStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResearchSubjectStatusCode =
  typeof ResearchSubjectStatusCode[keyof typeof ResearchSubjectStatusCode];
