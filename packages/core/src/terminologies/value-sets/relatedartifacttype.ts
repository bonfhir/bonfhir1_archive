/**
 * The type of relationship to the related artifact.
 * http://hl7.org/fhir/ValueSet/related-artifact-type
 */
export const RelatedArtifactTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RelatedArtifactTypeCode =
  typeof RelatedArtifactTypeCode[keyof typeof RelatedArtifactTypeCode];
