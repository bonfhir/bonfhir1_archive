/**
 * Constrains the ActCode to the domain of Container Registration
 * http://terminology.hl7.org/ValueSet/v3-ActContainerRegistrationCode
 */
export const ActContainerRegistrationCodeCode = {
  /**
   * Identified
   */
  ID: "ID",

  /**
   * In Position
   */
  IP: "IP",

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
   * Process Completed
   */
  R: "R",

  /**
   * Container Unavailable
   */
  X: "X",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActContainerRegistrationCodeCode =
  typeof ActContainerRegistrationCodeCode[keyof typeof ActContainerRegistrationCodeCode];
