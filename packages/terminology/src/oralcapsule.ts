/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-OralCapsule
 */
export const OralCapsuleCode = {
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
export type OralCapsuleCode =
  typeof OralCapsuleCode[keyof typeof OralCapsuleCode];
