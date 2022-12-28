/**
 * Citation contribution.
 * http://hl7.org/fhir/ValueSet/artifact-contribution-type
 */
export const ArtifactContributionTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ArtifactContributionTypeCode =
  typeof ArtifactContributionTypeCode[keyof typeof ArtifactContributionTypeCode];
