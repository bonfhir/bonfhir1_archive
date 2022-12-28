/**
 * This example value set defines a set of codes that can be used to express the usage type of an EpisodeOfCare record.
 * http://hl7.org/fhir/ValueSet/episodeofcare-type
 */
export const EpisodeOfCareTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EpisodeOfCareTypeCode =
  typeof EpisodeOfCareTypeCode[keyof typeof EpisodeOfCareTypeCode];
