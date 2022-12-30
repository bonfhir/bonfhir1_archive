/**
 * **Definition:**Identifies why the dispense event was not completed
 * http://terminology.hl7.org/ValueSet/v3-PharmacySupplyEventAbortReason
 */
export const PharmacySupplyEventAbortReasonCode = {
  /**
   * PharmacySupplyEventAbortReason
   */
  _PharmacySupplyEventAbortReason: "_PharmacySupplyEventAbortReason",

  /**
   * contraindication
   */
  CONTRA: "CONTRA",

  /**
   * order aborted
   */
  FOABORT: "FOABORT",

  /**
   * order suspended
   */
  FOSUSP: "FOSUSP",

  /**
   * not picked up
   */
  NOPICK: "NOPICK",

  /**
   * patient changed mind
   */
  PATDEC: "PATDEC",

  /**
   * change supply quantity
   */
  QUANTCHG: "QUANTCHG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PharmacySupplyEventAbortReasonCode =
  typeof PharmacySupplyEventAbortReasonCode[keyof typeof PharmacySupplyEventAbortReasonCode];
