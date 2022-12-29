/**
 * Set of codes used to value Act.Confidentiality and Role.Confidentiality attribute in accordance with the definition for concept domain "Confidentiality".
 * http://terminology.hl7.org/ValueSet/v3-Confidentiality
 */
export const ConfidentialityCode = {
  /**
   * low
   */
  low: "L",

  /**
   * moderate
   */
  moderate: "M",

  /**
   * normal
   */
  normal: "N",

  /**
   * restricted
   */
  restricted: "R",

  /**
   * unrestricted
   */
  unrestricted: "U",

  /**
   * very restricted
   */
  veryrestricted: "V",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConfidentialityCode =
  typeof ConfidentialityCode[keyof typeof ConfidentialityCode];
