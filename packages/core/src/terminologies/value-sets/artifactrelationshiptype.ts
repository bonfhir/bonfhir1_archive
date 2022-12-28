/**
 * Artifact Relationship Type
 * http://hl7.org/fhir/ValueSet/artifact-relationship-type
 */
export const ArtifactRelationshipTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ArtifactRelationshipTypeCode =
  typeof ArtifactRelationshipTypeCode[keyof typeof ArtifactRelationshipTypeCode];
