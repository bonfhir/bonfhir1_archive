/**
 * The methods of referral can be used when referring to a specific HealthCareService resource.
 * http://terminology.hl7.org/ValueSet/service-referral-method
 */
export const ReferralMethodCode = {
  /**
   * Fax
   */
  Fax: "fax",

  /**
   * Phone
   */
  Phone: "phone",

  /**
   * Secure Messaging
   */
  SecureMessaging: "elec",

  /**
   * Secure Email
   */
  SecureEmail: "semail",

  /**
   * Mail
   */
  Mail: "mail",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ReferralMethodCode =
  typeof ReferralMethodCode[keyof typeof ReferralMethodCode];
