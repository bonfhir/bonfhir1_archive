/**
 * This value set includes Claim Type codes.
 * http://terminology.hl7.org/ValueSet/claim-type
 */
export const ClaimTypeCodesCode = {
  /**
   * Institutional
   */
  Institutional: "institutional",

  /**
   * Oral
   */
  Oral: "oral",

  /**
   * Pharmacy
   */
  Pharmacy: "pharmacy",

  /**
   * Professional
   */
  Professional: "professional",

  /**
   * Vision
   */
  Vision: "vision",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClaimTypeCodesCode =
  typeof ClaimTypeCodesCode[keyof typeof ClaimTypeCodesCode];
