/**
 * The quality of how direct the match is.
 * http://terminology.hl7.org/ValueSet/directness
 */
export const EvidenceDirectnessCode = {
  /**
   * Low quality match
   */
  low: "low",

  /**
   * Moderate quality match
   */
  moderate: "moderate",

  /**
   * High quality match
   */
  high: "high",

  /**
   * Exact match
   */
  exact: "exact",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EvidenceDirectnessCode =
  typeof EvidenceDirectnessCode[keyof typeof EvidenceDirectnessCode];
