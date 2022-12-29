/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActClassRecordOrganizer
 */
export const ActClassRecordOrganizerCode = {
  /**
   * composition
   */
  composition: "COMPOSITION",

  /**
   * document
   */
  document: "DOC",

  /**
   * clinical document
   */
  clinicaldocument: "DOCCLIN",

  /**
   * CDA Level One clinical document
   */
  CDALevelOneclinicaldocument: "CDALVLONE",

  /**
   * record container
   */
  recordcontainer: "CONTAINER",

  /**
   * category
   */
  category: "CATEGORY",

  /**
   * document body
   */
  documentbody: "DOCBODY",

  /**
   * document section
   */
  documentsection: "DOCSECT",

  /**
   * topic
   */
  topic: "TOPIC",

  /**
   * extract
   */
  extract: "EXTRACT",

  /**
   * electronic health record
   */
  electronichealthrecord: "EHR",

  /**
   * folder
   */
  folder: "FOLDER",

  /**
   * grouper
   */
  grouper: "GROUPER",

  /**
   * Cluster
   */
  Cluster: "CLUSTER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassRecordOrganizerCode =
  typeof ActClassRecordOrganizerCode[keyof typeof ActClassRecordOrganizerCode];
