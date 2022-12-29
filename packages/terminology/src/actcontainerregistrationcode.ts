/**
 * Constrains the ActCode to the domain of Container Registration
 * http://terminology.hl7.org/ValueSet/v3-ActContainerRegistrationCode
 */
export const ActContainerRegistrationCodeCode = {
  /**
   * Identified
   */
  Identified: "ID",

  /**
   * In Position
   */
  InPosition: "IP",

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
   * Process Completed
   */
  ProcessCompleted: "R",

  /**
   * Container Unavailable
   */
  ContainerUnavailable: "X",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActContainerRegistrationCodeCode =
  typeof ActContainerRegistrationCodeCode[keyof typeof ActContainerRegistrationCodeCode];
