/**
 * Value Set of codes specifying the scheme for a security check.
 * http://terminology.hl7.org/ValueSet/v2-0904
 */
export const Hl7VSSecurityCheckSchemeCode = {
  /**
   * Bank Card Validation Number
   */
  BankCardValidationNumber: "BCV",

  /**
   * Credit Card Security code
   */
  CreditCardSecuritycode: "CCS",

  /**
   * Version ID
   */
  VersionID: "VID",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSecurityCheckSchemeCode =
  typeof Hl7VSSecurityCheckSchemeCode[keyof typeof Hl7VSSecurityCheckSchemeCode];
