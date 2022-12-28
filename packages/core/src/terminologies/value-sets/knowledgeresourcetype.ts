/**
 * A list of all the knowledge resource types defined in this version of the FHIR specification.
 * http://hl7.org/fhir/ValueSet/knowledge-resource-types
 */
export const KnowledgeResourceTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type KnowledgeResourceTypeCode =
  typeof KnowledgeResourceTypeCode[keyof typeof KnowledgeResourceTypeCode];
