/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-OralCapsule
 */
export const OralCapsuleCode = {
  /**
   * Oral Capsule
   */
  ORCAP: "ORCAP",

  /**
   * Enteric Coated Capsule
   */
  ENTCAP: "ENTCAP",

  /**
   * Extended Release Enteric Coated Capsule
   */
  ERENTCAP: "ERENTCAP",

  /**
   * Extended Release Capsule
   */
  ERCAP: "ERCAP",

  /**
   * 12 Hour Extended Release Capsule
   */
  ERCAP12: "ERCAP12",

  /**
   * 24 Hour Extended Release Capsule
   */
  ERCAP24: "ERCAP24",

  /**
   * Extended Release Enteric Coated Capsule
   */
  ERECCAP: "ERECCAP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OralCapsuleCode =
  typeof OralCapsuleCode[keyof typeof OralCapsuleCode];
