/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActClassRecordOrganizer
 */
export const ActClassRecordOrganizerCode = {
  /**
   * composition
   */
  COMPOSITION: "COMPOSITION",

  /**
   * document
   */
  DOC: "DOC",

  /**
   * clinical document
   */
  DOCCLIN: "DOCCLIN",

  /**
   * CDA Level One clinical document
   */
  CDALVLONE: "CDALVLONE",

  /**
   * record container
   */
  CONTAINER: "CONTAINER",

  /**
   * category
   */
  CATEGORY: "CATEGORY",

  /**
   * document body
   */
  DOCBODY: "DOCBODY",

  /**
   * document section
   */
  DOCSECT: "DOCSECT",

  /**
   * topic
   */
  TOPIC: "TOPIC",

  /**
   * extract
   */
  EXTRACT: "EXTRACT",

  /**
   * electronic health record
   */
  EHR: "EHR",

  /**
   * folder
   */
  FOLDER: "FOLDER",

  /**
   * grouper
   */
  GROUPER: "GROUPER",

  /**
   * Cluster
   */
  CLUSTER: "CLUSTER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassRecordOrganizerCode =
  typeof ActClassRecordOrganizerCode[keyof typeof ActClassRecordOrganizerCode];
