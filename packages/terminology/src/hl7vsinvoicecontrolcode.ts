/**
 * Value Set of codes that specify what invoice action is being performed by this message.
 * http://terminology.hl7.org/ValueSet/v2-0553
 */
export const Hl7VSInvoiceControlCodeCode = {
  /**
   * Original Invoice
   */
  OriginalInvoice: "OR",

  /**
   * Cancel Invoice
   */
  CancelInvoice: "CN",

  /**
   * Cancel Invoice Product/Service Group
   */
  CancelInvoiceProductServiceGroup: "CG",

  /**
   * Cancel Invoice Product/Service Line Item
   */
  CancelInvoiceProductServiceLineItem: "CL",

  /**
   * Pre-Determination Invoice
   */
  PreDeterminationInvoice: "PD",

  /**
   * Re-Assessment
   */
  ReAssessment: "RA",

  /**
   * Original Authorization
   */
  OriginalAuthorization: "OA",

  /**
   * Special Authorization
   */
  SpecialAuthorization: "SA",

  /**
   * Combined Authorization and Adjudication request
   */
  CombinedAuthorizationandAdjudicationrequest: "AI",

  /**
   * Pre-Authorization
   */
  PreAuthorization: "PA",

  /**
   * Authorization request for inpatient admission
   */
  Authorizationrequestforinpatientadmission: "AA",

  /**
   * Authorization request for inpatient stay extension
   */
  Authorizationrequestforinpatientstayextension: "EA",

  /**
   * Referral Pre-Authorization
   */
  ReferralPreAuthorization: "RC",

  /**
   * Cancel Authorization request
   */
  CancelAuthorizationrequest: "CA",

  /**
   * Copy of Invoice
   */
  CopyofInvoice: "CP",

  /**
   * Coverage Register Query
   */
  CoverageRegisterQuery: "CQ",

  /**
   * Referral authorization
   */
  Referralauthorization: "RU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSInvoiceControlCodeCode =
  typeof Hl7VSInvoiceControlCodeCode[keyof typeof Hl7VSInvoiceControlCodeCode];
