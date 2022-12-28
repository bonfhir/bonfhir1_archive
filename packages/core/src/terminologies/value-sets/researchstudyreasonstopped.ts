/**
 * Codes for why the study ended prematurely.
 * http://hl7.org/fhir/ValueSet/research-study-reason-stopped
 */
export const ResearchStudyReasonStoppedCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResearchStudyReasonStoppedCode =
  typeof ResearchStudyReasonStoppedCode[keyof typeof ResearchStudyReasonStoppedCode];
