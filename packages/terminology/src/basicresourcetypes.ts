/**
 * This value set defines codes for resources not yet supported by (or which will never be supported by) FHIR.  Many of the codes listed here will eventually be turned into official resources.  However, there is no guarantee that any particular resource will be created nor that the scope will be exactly as defined by the codes presented here.  Codes in this set will be deprecated if/when formal resources are defined that encompass these concepts.
 * http://terminology.hl7.org/ValueSet/basic-resource-type
 */
export const BasicResourceTypesCode = {
  /**
   * Consent
   */
  Consent: "consent",

  /**
   * Referral
   */
  Referral: "referral",

  /**
   * Adverse Event
   */
  AdverseEvent: "advevent",

  /**
   * Appointment Request
   */
  AppointmentRequest: "aptmtreq",

  /**
   * Transfer
   */
  Transfer: "transfer",

  /**
   * Diet
   */
  Diet: "diet",

  /**
   * Administrative Activity
   */
  AdministrativeActivity: "adminact",

  /**
   * Exposure
   */
  Exposure: "exposure",

  /**
   * Investigation
   */
  Investigation: "investigation",

  /**
   * Account
   */
  Account: "account",

  /**
   * Invoice
   */
  Invoice: "invoice",

  /**
   * Invoice Adjudication
   */
  InvoiceAdjudication: "adjudicat",

  /**
   * Pre-determination Request
   */
  PredeterminationRequest: "predetreq",

  /**
   * Predetermination
   */
  Predetermination: "predetermine",

  /**
   * Study
   */
  Study: "study",

  /**
   * Protocol
   */
  Protocol: "protocol",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BasicResourceTypesCode =
  typeof BasicResourceTypesCode[keyof typeof BasicResourceTypesCode];
