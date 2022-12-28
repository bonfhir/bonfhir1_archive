/**
 * Codes identifying the lifecycle stage of a definition.
 * http://hl7.org/fhir/ValueSet/definition-status
 */
export const DefinitionStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DefinitionStatusCode =
  typeof DefinitionStatusCode[keyof typeof DefinitionStatusCode];
