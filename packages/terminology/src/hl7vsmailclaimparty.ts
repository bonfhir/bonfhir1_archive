/**
 * Value Set of codes that specify a party to which a claim should be mailed when claims are sent by mail.
 * http://terminology.hl7.org/ValueSet/v2-0137
 */
export const Hl7VSMailClaimPartyCode = {
  /**
   * Employer
   */
  E: "E",

  /**
   * Guarantor
   */
  G: "G",

  /**
   * Insurance company
   */
  I: "I",

  /**
   * Other
   */
  O: "O",

  /**
   * Patient
   */
  P: "P",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMailClaimPartyCode =
  typeof Hl7VSMailClaimPartyCode[keyof typeof Hl7VSMailClaimPartyCode];
