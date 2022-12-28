/**
 * Cited Artifact Status Type
 * http://hl7.org/fhir/ValueSet/cited-artifact-status-type
 */
export const CitedArtifactStatusTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CitedArtifactStatusTypeCode =
  typeof CitedArtifactStatusTypeCode[keyof typeof CitedArtifactStatusTypeCode];
