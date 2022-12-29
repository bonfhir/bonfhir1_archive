/**
 * A group of entries within a composition that are related to a common clinical theme - such as a specific disorder or problem, prevention, screening and provision of contraceptive services.

A topic may contain categories and entries.
 * http://terminology.hl7.org/ValueSet/v3-ActClassTopic
 */
export const ActClassTopicCode = {
  /**
   * topic
   */
  topic: "TOPIC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassTopicCode =
  typeof ActClassTopicCode[keyof typeof ActClassTopicCode];
