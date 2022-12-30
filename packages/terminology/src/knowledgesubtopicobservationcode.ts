/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-KnowledgeSubtopicObservationCode
 */
export const KnowledgeSubtopicObservationCodeCode = {
  /**
   * knowledge subtopic
   */
  KSUBT: "KSUBT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type KnowledgeSubtopicObservationCodeCode =
  typeof KnowledgeSubtopicObservationCodeCode[keyof typeof KnowledgeSubtopicObservationCodeCode];
