/**
 * **Description:** The identifier was issued by the system responsible for constructing the instance.
 * http://terminology.hl7.org/ValueSet/v3-IdentifierReliability
 */
export const IdentifierReliabilityCode = {
  /**
   * Issued by System
   */
  ISS: "ISS",

  /**
   * Unverified by system
   */
  UNV: "UNV",

  /**
   * Verified by system
   */
  VRF: "VRF",

  /**
   * Verified by system
   */
  VER: "VER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IdentifierReliabilityCode =
  typeof IdentifierReliabilityCode[keyof typeof IdentifierReliabilityCode];
