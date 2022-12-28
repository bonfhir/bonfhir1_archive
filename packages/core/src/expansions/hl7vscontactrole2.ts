/**
 * Concepts which specify a relationship role that the next of kin/associated parties plays with regard to the patient. Built on the updated code system.  Also used in referrals, for example, it may be necessary to identify the contact representative at the clinic that sent a referral.
 * http://terminology.hl7.org/ValueSet/v2-0131
 */
export const Hl7VSContactRole2Code = {
  /**
   * Billing contact person
   */
  BP: "BP",

  /**
   * Contact person
   */
  CP: "CP",

  /**
   * Emergency contact person
   */
  EP: "EP",

  /**
   * Person preparing referral
   */
  PR: "PR",

  /**
   * Employer
   */
  E: "E",

  /**
   * Emergency Contact
   */
  C: "C",

  /**
   * Federal Agency
   */
  F: "F",

  /**
   * Insurance Company
   */
  I: "I",

  /**
   * Next-of-Kin
   */
  N: "N",

  /**
   * State Agency
   */
  S: "S",

  /**
   * Other
   */
  O: "O",

  /**
   * Unknown
   */
  U: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSContactRole2Code =
  typeof Hl7VSContactRole2Code[keyof typeof Hl7VSContactRole2Code];
