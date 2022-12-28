/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-KnowledgeSubjectObservationCode
 */
export const KnowledgeSubjectObservationCodeCode = {
  /**
   * knowledge subject
   */
  KSUBJ: "KSUBJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type KnowledgeSubjectObservationCodeCode =
  typeof KnowledgeSubjectObservationCodeCode[keyof typeof KnowledgeSubjectObservationCodeCode];
