/**
 * This value set includes Claim Type codes.
 * http://terminology.hl7.org/ValueSet/claim-type
 */
export const ClaimTypeCodesCode = {
  /**
   * Institutional
   */
  institutional: "institutional",

  /**
   * Oral
   */
  oral: "oral",

  /**
   * Pharmacy
   */
  pharmacy: "pharmacy",

  /**
   * Professional
   */
  professional: "professional",

  /**
   * Vision
   */
  vision: "vision",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClaimTypeCodesCode =
  typeof ClaimTypeCodesCode[keyof typeof ClaimTypeCodesCode];
