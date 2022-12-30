/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasQualifier
 */
export const ActRelationshipHasQualifierCode = {
  /**
   * has qualifier
   */
  QUALF: "QUALF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasQualifierCode =
  typeof ActRelationshipHasQualifierCode[keyof typeof ActRelationshipHasQualifierCode];
