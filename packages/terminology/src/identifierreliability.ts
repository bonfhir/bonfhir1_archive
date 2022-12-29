/**
 * **Description:** The identifier was issued by the system responsible for constructing the instance.
 * http://terminology.hl7.org/ValueSet/v3-IdentifierReliability
 */
export const IdentifierReliabilityCode = {
  /**
   * Issued by System
   */
  IssuedbySystem: "ISS",

  /**
   * Unverified by system
   */
  Unverifiedbysystem: "UNV",

  /**
   * Verified by system
   */
  Verifiedbysystem: "VRF",

  /**
   * Verified by system
   */
  Verifiedbysystem: "VER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IdentifierReliabilityCode =
  typeof IdentifierReliabilityCode[keyof typeof IdentifierReliabilityCode];
