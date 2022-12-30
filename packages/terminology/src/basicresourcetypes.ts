/**
 * This value set defines codes for resources not yet supported by (or which will never be supported by) FHIR.  Many of the codes listed here will eventually be turned into official resources.  However, there is no guarantee that any particular resource will be created nor that the scope will be exactly as defined by the codes presented here.  Codes in this set will be deprecated if/when formal resources are defined that encompass these concepts.
 * http://terminology.hl7.org/ValueSet/basic-resource-type
 */
export const BasicResourceTypesCode = {
  /**
   * Consent
   */
  consent: "consent",

  /**
   * Referral
   */
  referral: "referral",

  /**
   * Adverse Event
   */
  advevent: "advevent",

  /**
   * Appointment Request
   */
  aptmtreq: "aptmtreq",

  /**
   * Transfer
   */
  transfer: "transfer",

  /**
   * Diet
   */
  diet: "diet",

  /**
   * Administrative Activity
   */
  adminact: "adminact",

  /**
   * Exposure
   */
  exposure: "exposure",

  /**
   * Investigation
   */
  investigation: "investigation",

  /**
   * Account
   */
  account: "account",

  /**
   * Invoice
   */
  invoice: "invoice",

  /**
   * Invoice Adjudication
   */
  adjudicat: "adjudicat",

  /**
   * Pre-determination Request
   */
  predetreq: "predetreq",

  /**
   * Predetermination
   */
  predetermine: "predetermine",

  /**
   * Study
   */
  study: "study",

  /**
   * Protocol
   */
  protocol: "protocol",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BasicResourceTypesCode =
  typeof BasicResourceTypesCode[keyof typeof BasicResourceTypesCode];
