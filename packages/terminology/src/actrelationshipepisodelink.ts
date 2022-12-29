/**
 * Expresses an association that links two instances of the same act over time, indicating that the instance are part of the same episode, e.g. linking two condition nodes for episode of illness; linking two encounters for episode of encounter.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipEpisodelink
 */
export const ActRelationshipEpisodelinkCode = {
  /**
   * episodeLink
   */
  episodeLink: "ELNK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipEpisodelinkCode =
  typeof ActRelationshipEpisodelinkCode[keyof typeof ActRelationshipEpisodelinkCode];
