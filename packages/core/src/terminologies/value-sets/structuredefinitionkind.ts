/**
 * Defines the type of structure that a definition is describing.
 * http://hl7.org/fhir/ValueSet/structure-definition-kind
 */
export const StructureDefinitionKindCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StructureDefinitionKindCode =
  typeof StructureDefinitionKindCode[keyof typeof StructureDefinitionKindCode];
