/**
 * Concepts which specify a relationship role that the next of kin/associated parties plays with regard to the patient. Built on the updated code system.  Also used in referrals, for example, it may be necessary to identify the contact representative at the clinic that sent a referral.
 * http://terminology.hl7.org/ValueSet/v2-0131
 */
export const Hl7VSContactRole2Code = {
  /**
   * Billing contact person
   */
  Billingcontactperson: "BP",

  /**
   * Contact person
   */
  Contactperson: "CP",

  /**
   * Emergency contact person
   */
  Emergencycontactperson: "EP",

  /**
   * Person preparing referral
   */
  Personpreparingreferral: "PR",

  /**
   * Employer
   */
  Employer: "E",

  /**
   * Emergency Contact
   */
  EmergencyContact: "C",

  /**
   * Federal Agency
   */
  FederalAgency: "F",

  /**
   * Insurance Company
   */
  InsuranceCompany: "I",

  /**
   * Next-of-Kin
   */
  NextofKin: "N",

  /**
   * State Agency
   */
  StateAgency: "S",

  /**
   * Other
   */
  Other: "O",

  /**
   * Unknown
   */
  Unknown: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSContactRole2Code =
  typeof Hl7VSContactRole2Code[keyof typeof Hl7VSContactRole2Code];
