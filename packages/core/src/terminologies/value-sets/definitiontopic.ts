/**
 * High-level categorization of the definition, used for searching, sorting, and filtering.
 * http://hl7.org/fhir/ValueSet/definition-topic
 */
export const DefinitionTopicCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DefinitionTopicCode =
  typeof DefinitionTopicCode[keyof typeof DefinitionTopicCode];
