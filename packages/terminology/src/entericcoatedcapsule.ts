/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EntericCoatedCapsule
 */
export const EntericCoatedCapsuleCode = {
  /**
   * Enteric Coated Capsule
   */
  ENTCAP: "ENTCAP",

  /**
   * Extended Release Enteric Coated Capsule
   */
  ERENTCAP: "ERENTCAP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntericCoatedCapsuleCode =
  typeof EntericCoatedCapsuleCode[keyof typeof EntericCoatedCapsuleCode];
