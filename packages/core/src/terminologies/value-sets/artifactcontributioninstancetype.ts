/**
 * Artifact Contribution Instance Type
 * http://hl7.org/fhir/ValueSet/artifact-contribution-instance-type
 */
export const ArtifactContributionInstanceTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ArtifactContributionInstanceTypeCode =
  typeof ArtifactContributionInstanceTypeCode[keyof typeof ArtifactContributionInstanceTypeCode];
