/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EntericCoatedTablet
 */
export const EntericCoatedTabletCode = {
  /**
   * Enteric Coated Tablet
   */
  ECTAB: "ECTAB",

  /**
   * Extended Release Enteric Coated Tablet
   */
  ERECTAB: "ERECTAB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntericCoatedTabletCode =
  typeof EntericCoatedTabletCode[keyof typeof EntericCoatedTabletCode];
