/**
 * Codes for the main intent of the study.
 * http://hl7.org/fhir/ValueSet/research-study-prim-purp-type
 */
export const ResearchStudyPrimaryPurposeTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResearchStudyPrimaryPurposeTypeCode =
  typeof ResearchStudyPrimaryPurposeTypeCode[keyof typeof ResearchStudyPrimaryPurposeTypeCode];
