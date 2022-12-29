/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasValue
 */
export const ActRelationshipHasValueCode = {
  /**
   * has value
   */
  hasvalue: "VALUE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasValueCode =
  typeof ActRelationshipHasValueCode[keyof typeof ActRelationshipHasValueCode];
