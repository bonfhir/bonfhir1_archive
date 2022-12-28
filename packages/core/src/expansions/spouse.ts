/**
 * **Description:**A relationship between two people characterizing their "familial" relationship
 * http://terminology.hl7.org/ValueSet/v3-Spouse
 */
export const SpouseCode = {
  /**
   * spouse
   */
  SPS: "SPS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SpouseCode = typeof SpouseCode[keyof typeof SpouseCode];
