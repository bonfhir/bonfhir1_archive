/**
 * Used to express the reason and specific aspect for the variant abstract, such as language and specific language.
 * http://hl7.org/fhir/ValueSet/cited-artifact-abstract-type
 */
export const CitedArtifactAbstractTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CitedArtifactAbstractTypeCode =
  typeof CitedArtifactAbstractTypeCode[keyof typeof CitedArtifactAbstractTypeCode];
