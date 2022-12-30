/**
 * This example value set defines a set of codes that can be used to indicate the purpose for which you would contact a contact party.
 * http://terminology.hl7.org/ValueSet/contactentity-type
 */
export const ContactEntityTypeCode = {
  /**
   * Billing
   */
  BILL: "BILL",

  /**
   * Administrative
   */
  ADMIN: "ADMIN",

  /**
   * Human Resource
   */
  HR: "HR",

  /**
   * Payor
   */
  PAYOR: "PAYOR",

  /**
   * Patient
   */
  PATINF: "PATINF",

  /**
   * Press
   */
  PRESS: "PRESS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContactEntityTypeCode =
  typeof ContactEntityTypeCode[keyof typeof ContactEntityTypeCode];
