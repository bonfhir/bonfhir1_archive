/**
 * A solid dosage form in which the drug is enclosed within either a hard or soft soluble container or "shell" made from a suitable form of gelatin.
 * http://terminology.hl7.org/ValueSet/v3-CapsuleDrugForm
 */
export const CapsuleDrugFormCode = {
  /**
   * Capsule
   */
  Capsule: "CAP",

  /**
   * Oral Capsule
   */
  OralCapsule: "ORCAP",

  /**
   * Enteric Coated Capsule
   */
  EntericCoatedCapsule: "ENTCAP",

  /**
   * Extended Release Enteric Coated Capsule
   */
  ExtendedReleaseEntericCoatedCapsule: "ERENTCAP",

  /**
   * Extended Release Capsule
   */
  ExtendedReleaseCapsule: "ERCAP",

  /**
   * 12 Hour Extended Release Capsule
   */
  TwelveHourExtendedReleaseCapsule: "ERCAP12",

  /**
   * 24 Hour Extended Release Capsule
   */
  TwentyFourHourExtendedReleaseCapsule: "ERCAP24",

  /**
   * Extended Release Enteric Coated Capsule
   */
  ExtendedReleaseEntericCoatedCapsule: "ERECCAP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CapsuleDrugFormCode =
  typeof CapsuleDrugFormCode[keyof typeof CapsuleDrugFormCode];
