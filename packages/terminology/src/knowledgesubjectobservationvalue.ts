/**
 *
 * http://terminology.hl7.org/ValueSet/v3-KnowledgeSubjectObservationValue
 */
export const KnowledgeSubjectObservationValueCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type KnowledgeSubjectObservationValueCode =
  typeof KnowledgeSubjectObservationValueCode[keyof typeof KnowledgeSubjectObservationValueCode];
