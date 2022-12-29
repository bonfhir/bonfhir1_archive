/**
 * Value Set of codes that identify the status of the unique container in which the specimen resides at the time the transaction was initiated.
 * http://terminology.hl7.org/ValueSet/v2-0370
 */
export const Hl7VSContainerStatusCode = {
  /**
   * Archived
   */
  Archived: "A",

  /**
   * Identified
   */
  Identified: "I",

  /**
   * Left Equipment
   */
  LeftEquipment: "L",

  /**
   * Missing
   */
  Missing: "M",

  /**
   * In Process
   */
  InProcess: "O",

  /**
   * In Position
   */
  InPosition: "P",

  /**
   * Process Completed
   */
  ProcessCompleted: "R",

  /**
   * Unknown
   */
  Unknown: "U",

  /**
   * Container Unavailable
   */
  ContainerUnavailable: "X",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSContainerStatusCode =
  typeof Hl7VSContainerStatusCode[keyof typeof Hl7VSContainerStatusCode];
