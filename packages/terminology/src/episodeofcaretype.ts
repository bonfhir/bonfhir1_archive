/**
 * This example value set defines a set of codes that can be used to express the usage type of an EpisodeOfCare record.
 * http://terminology.hl7.org/ValueSet/episodeofcare-type
 */
export const EpisodeOfCareTypeCode = {
  /**
   * Home and Community Care
   */
  hacc: "hacc",

  /**
   * Post Acute Care
   */
  pac: "pac",

  /**
   * Post coordinated diabetes program
   */
  diab: "diab",

  /**
   * Drug and alcohol rehabilitation
   */
  da: "da",

  /**
   * Community-based aged care
   */
  cacp: "cacp",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EpisodeOfCareTypeCode =
  typeof EpisodeOfCareTypeCode[keyof typeof EpisodeOfCareTypeCode];
