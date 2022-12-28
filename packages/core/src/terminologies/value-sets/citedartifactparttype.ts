/**
 * To describe the reason for the variant citation, such as version number or subpart specification.
 * http://hl7.org/fhir/ValueSet/cited-artifact-part-type
 */
export const CitedArtifactPartTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CitedArtifactPartTypeCode =
  typeof CitedArtifactPartTypeCode[keyof typeof CitedArtifactPartTypeCode];
