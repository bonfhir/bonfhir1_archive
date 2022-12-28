/**
 * Codes that convey the current status of the research study.
 * http://hl7.org/fhir/ValueSet/research-study-status
 */
export const ResearchStudyStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResearchStudyStatusCode =
  typeof ResearchStudyStatusCode[keyof typeof ResearchStudyStatusCode];
