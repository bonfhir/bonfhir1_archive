/**
 * Used to group a set of acts sharing a common context. Container structures can nest within other context structures - such as where a document is contained within a folder, or a folder is contained within an EHR extract.

**Open issue:**  There is a clear conflict between this act and the use of the more general "component" ActRelationship. The question that must be resolved is what should be the class code of the parent (or containing) Act.
 * http://terminology.hl7.org/ValueSet/v3-ActClassContainer
 */
export const ActClassContainerCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassContainerCode =
  typeof ActClassContainerCode[keyof typeof ActClassContainerCode];
