/**
 * The status of the episode of care.
 * http://hl7.org/fhir/ValueSet/episode-of-care-status
 */
export const EpisodeOfCareStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EpisodeOfCareStatusCode =
  typeof EpisodeOfCareStatusCode[keyof typeof EpisodeOfCareStatusCode];
