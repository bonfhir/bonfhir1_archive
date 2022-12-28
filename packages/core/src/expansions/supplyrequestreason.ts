/**
 * The reason why the supply item was requested.
 * http://terminology.hl7.org/ValueSet/supplyrequest-reason
 */
export const SupplyRequestReasonCode = {
  /**
   * Patient Care
   */
  "patient-care": "patient-care",

  /**
   * Ward Stock
   */
  "ward-stock": "ward-stock",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SupplyRequestReasonCode =
  typeof SupplyRequestReasonCode[keyof typeof SupplyRequestReasonCode];
