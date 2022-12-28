/**
 * Cited Artifact Classification Type
 * http://hl7.org/fhir/ValueSet/cited-artifact-classification-type
 */
export const CitedArtifactClassificationTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CitedArtifactClassificationTypeCode =
  typeof CitedArtifactClassificationTypeCode[keyof typeof CitedArtifactClassificationTypeCode];
