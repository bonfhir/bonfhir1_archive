/**
 * A solid dosage form in which the drug is enclosed within either a hard or soft soluble container or "shell" made from a suitable form of gelatin.
 * http://terminology.hl7.org/ValueSet/v3-CapsuleDrugForm
 */
export const CapsuleDrugFormCode = {
  /**
   * Capsule
   */
  CAP: "CAP",

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
export type CapsuleDrugFormCode =
  typeof CapsuleDrugFormCode[keyof typeof CapsuleDrugFormCode];
