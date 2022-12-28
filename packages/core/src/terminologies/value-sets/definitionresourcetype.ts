/**
 * A list of all the definition resource types defined in this version of the FHIR specification.
 * http://hl7.org/fhir/ValueSet/definition-resource-types
 */
export const DefinitionResourceTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DefinitionResourceTypeCode =
  typeof DefinitionResourceTypeCode[keyof typeof DefinitionResourceTypeCode];
