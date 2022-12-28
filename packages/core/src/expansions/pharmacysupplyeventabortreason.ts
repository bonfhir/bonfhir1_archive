/**
 * **Definition:**Identifies why the dispense event was not completed
 * http://terminology.hl7.org/ValueSet/v3-PharmacySupplyEventAbortReason
 */
export const PharmacySupplyEventAbortReasonCode = {
  /**
   * PharmacySupplyEventAbortReason
   */
  _PharmacySupplyEventAbortReason: "_PharmacySupplyEventAbortReason",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PharmacySupplyEventAbortReasonCode =
  typeof PharmacySupplyEventAbortReasonCode[keyof typeof PharmacySupplyEventAbortReasonCode];
