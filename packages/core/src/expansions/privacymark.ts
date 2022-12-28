/**
 * Codes used for human readable marks indicating, e.g., the level of confidentiality protection, an authorized compartment, the integrity, or the handling instruction required by applicable policy. Such markings must be displayed as directed by applicable policy on electronically rendered information content and any electronic transmittal envelope or container; or on hardcopy information and any physical transmittal envelope or container.

Purpose: Supports the selection of the entire PrivacyMark value set with head code for e.g., rules engine policy set purposes.
 * http://terminology.hl7.org/ValueSet/v3-PrivacyMark
 */
export const PrivacyMarkCode = {
  /**
   * privacy mark
   */
  PrivacyMark: "PrivacyMark",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PrivacyMarkCode =
  typeof PrivacyMarkCode[keyof typeof PrivacyMarkCode];
