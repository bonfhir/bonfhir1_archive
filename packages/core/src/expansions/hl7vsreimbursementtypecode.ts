/**
 * Value Set of codes that specify the fee schedule reimbursement type applied to a line item.
 * http://terminology.hl7.org/ValueSet/v2-0470
 */
export const Hl7VSReimbursementTypeCodeCode = {
  /**
   * Outpatient Prospective Payment System
   */
  OPPS: "OPPS",

  /**
   * Packaged APC
   */
  Pckg: "Pckg",

  /**
   * Clinical Laboratory APC
   */
  Lab: "Lab",

  /**
   * Therapy APC
   */
  Thrpy: "Thrpy",

  /**
   * Durable Medical Equipment
   */
  DME: "DME",

  /**
   * Epotein
   */
  EPO: "EPO",

  /**
   * Screening Mammography APC
   */
  Mamm: "Mamm",

  /**
   * Partial Hospitalization APC
   */
  PartH: "PartH",

  /**
   * Corneal Tissue APC
   */
  Crnl: "Crnl",

  /**
   * This APC is not paid
   */
  NoPay: "NoPay",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSReimbursementTypeCodeCode =
  typeof Hl7VSReimbursementTypeCodeCode[keyof typeof Hl7VSReimbursementTypeCodeCode];
