/**
 * The quality of how direct the match is.
 * http://terminology.hl7.org/ValueSet/directness
 */
export const EvidenceDirectnessCode = {
  /**
   * Low quality match
   */
  Lowqualitymatch: "low",

  /**
   * Moderate quality match
   */
  Moderatequalitymatch: "moderate",

  /**
   * High quality match
   */
  Highqualitymatch: "high",

  /**
   * Exact match
   */
  Exactmatch: "exact",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EvidenceDirectnessCode =
  typeof EvidenceDirectnessCode[keyof typeof EvidenceDirectnessCode];
