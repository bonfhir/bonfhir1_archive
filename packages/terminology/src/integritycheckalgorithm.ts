/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-IntegrityCheckAlgorithm
 */
export const IntegrityCheckAlgorithmCode = {
  /**
   * secure hash algorithm - 1
   */
  "SHA-1": "SHA-1",

  /**
   * secure hash algorithm - 256
   */
  "SHA-256": "SHA-256",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntegrityCheckAlgorithmCode =
  typeof IntegrityCheckAlgorithmCode[keyof typeof IntegrityCheckAlgorithmCode];
