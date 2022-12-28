/**
 * Citation artifact classifier
 * http://hl7.org/fhir/ValueSet/citation-artifact-classifier
 */
export const CitationArtifactClassifierCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CitationArtifactClassifierCode =
  typeof CitationArtifactClassifierCode[keyof typeof CitationArtifactClassifierCode];
