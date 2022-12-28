/**
 * Value Set of codes that identify the status of the unique container in which the specimen resides at the time the transaction was initiated.
 * http://terminology.hl7.org/ValueSet/v2-0370
 */
export const Hl7VSContainerStatusCode = {
  /**
   * Archived
   */
  A: "A",

  /**
   * Identified
   */
  I: "I",

  /**
   * Left Equipment
   */
  L: "L",

  /**
   * Missing
   */
  M: "M",

  /**
   * In Process
   */
  O: "O",

  /**
   * In Position
   */
  P: "P",

  /**
   * Process Completed
   */
  R: "R",

  /**
   * Unknown
   */
  U: "U",

  /**
   * Container Unavailable
   */
  X: "X",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSContainerStatusCode =
  typeof Hl7VSContainerStatusCode[keyof typeof Hl7VSContainerStatusCode];
