/**
 * An assertion that a new observation may be the manifestation of another existing observation or action. This assumption is attributed to the same actor who asserts the manifestation. This is stronger and more specific than an inverted support link. For example, an agitated appearance can be asserted to be the manifestation (effect) of a known hyperthyroxia. This expresses that one might not have realized a symptom if it would not be a common manifestation of a known condition. The target (cause) may be any service, while the source (manifestation) must be an observation.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipIsManifestationOf
 */
export const ActRelationshipIsManifestationOfCode = {
  /**
   * is manifestation of
   */
  ismanifestationof: "MFST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipIsManifestationOfCode =
  typeof ActRelationshipIsManifestationOfCode[keyof typeof ActRelationshipIsManifestationOfCode];
