/**
 * Value Set of codes that specify what invoice action is being performed by this message.
 * http://terminology.hl7.org/ValueSet/v2-0553
 */
export const Hl7VSInvoiceControlCodeCode = {
  /**
   * Original Invoice
   */
  OR: "OR",

  /**
   * Cancel Invoice
   */
  CN: "CN",

  /**
   * Cancel Invoice Product/Service Group
   */
  CG: "CG",

  /**
   * Cancel Invoice Product/Service Line Item
   */
  CL: "CL",

  /**
   * Pre-Determination Invoice
   */
  PD: "PD",

  /**
   * Re-Assessment
   */
  RA: "RA",

  /**
   * Original Authorization
   */
  OA: "OA",

  /**
   * Special Authorization
   */
  SA: "SA",

  /**
   * Combined Authorization and Adjudication request
   */
  AI: "AI",

  /**
   * Pre-Authorization
   */
  PA: "PA",

  /**
   * Authorization request for inpatient admission
   */
  AA: "AA",

  /**
   * Authorization request for inpatient stay extension
   */
  EA: "EA",

  /**
   * Referral Pre-Authorization
   */
  RC: "RC",

  /**
   * Cancel Authorization request
   */
  CA: "CA",

  /**
   * Copy of Invoice
   */
  CP: "CP",

  /**
   * Coverage Register Query
   */
  CQ: "CQ",

  /**
   * Referral authorization
   */
  RU: "RU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSInvoiceControlCodeCode =
  typeof Hl7VSInvoiceControlCodeCode[keyof typeof Hl7VSInvoiceControlCodeCode];
