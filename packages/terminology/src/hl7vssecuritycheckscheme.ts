/**
 * Value Set of codes specifying the scheme for a security check.
 * http://terminology.hl7.org/ValueSet/v2-0904
 */
export const Hl7VSSecurityCheckSchemeCode = {
  /**
   * Bank Card Validation Number
   */
  BCV: "BCV",

  /**
   * Credit Card Security code
   */
  CCS: "CCS",

  /**
   * Version ID
   */
  VID: "VID",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSecurityCheckSchemeCode =
  typeof Hl7VSSecurityCheckSchemeCode[keyof typeof Hl7VSSecurityCheckSchemeCode];
