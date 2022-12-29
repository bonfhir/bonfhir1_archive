/**
 * This example value set defines a set of codes that can be used to express the usage type of an EpisodeOfCare record.
 * http://terminology.hl7.org/ValueSet/episodeofcare-type
 */
export const EpisodeOfCareTypeCode = {
  /**
   * Home and Community Care
   */
  HomeandCommunityCare: "hacc",

  /**
   * Post Acute Care
   */
  PostAcuteCare: "pac",

  /**
   * Post coordinated diabetes program
   */
  Postcoordinateddiabetesprogram: "diab",

  /**
   * Drug and alcohol rehabilitation
   */
  Drugandalcoholrehabilitation: "da",

  /**
   * Community-based aged care
   */
  Communitybasedagedcare: "cacp",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EpisodeOfCareTypeCode =
  typeof EpisodeOfCareTypeCode[keyof typeof EpisodeOfCareTypeCode];
