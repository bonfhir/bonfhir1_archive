/**
 * Codes for the stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
 * http://hl7.org/fhir/ValueSet/research-study-phase
 */
export const ResearchStudyPhaseCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResearchStudyPhaseCode =
  typeof ResearchStudyPhaseCode[keyof typeof ResearchStudyPhaseCode];
