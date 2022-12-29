/**
 * **Definition:**Identifies why the dispense event was not completed
 * http://terminology.hl7.org/ValueSet/v3-PharmacySupplyEventAbortReason
 */
export const PharmacySupplyEventAbortReasonCode = {
  /**
   * PharmacySupplyEventAbortReason
   */
  PharmacySupplyEventAbortReason: "_PharmacySupplyEventAbortReason",

  /**
   * contraindication
   */
  contraindication: "CONTRA",

  /**
   * order aborted
   */
  orderaborted: "FOABORT",

  /**
   * order suspended
   */
  ordersuspended: "FOSUSP",

  /**
   * not picked up
   */
  notpickedup: "NOPICK",

  /**
   * patient changed mind
   */
  patientchangedmind: "PATDEC",

  /**
   * change supply quantity
   */
  changesupplyquantity: "QUANTCHG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PharmacySupplyEventAbortReasonCode =
  typeof PharmacySupplyEventAbortReasonCode[keyof typeof PharmacySupplyEventAbortReasonCode];
