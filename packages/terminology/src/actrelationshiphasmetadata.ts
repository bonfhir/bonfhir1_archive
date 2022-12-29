/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasMetadata
 */
export const ActRelationshipHasMetadataCode = {
  /**
   * has metadata
   */
  hasmetadata: "META",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasMetadataCode =
  typeof ActRelationshipHasMetadataCode[keyof typeof ActRelationshipHasMetadataCode];
