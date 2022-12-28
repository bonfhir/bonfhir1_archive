/**
 * The methods of referral can be used when referring to a specific HealthCareService resource.
 * http://terminology.hl7.org/ValueSet/service-referral-method
 */
export const ReferralMethodCode = {
  /**
   * Fax
   */
  fax: "fax",

  /**
   * Phone
   */
  phone: "phone",

  /**
   * Secure Messaging
   */
  elec: "elec",

  /**
   * Secure Email
   */
  semail: "semail",

  /**
   * Mail
   */
  mail: "mail",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ReferralMethodCode =
  typeof ReferralMethodCode[keyof typeof ReferralMethodCode];
