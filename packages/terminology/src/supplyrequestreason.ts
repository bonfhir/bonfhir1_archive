/**
 * The reason why the supply item was requested.
 * http://terminology.hl7.org/ValueSet/supplyrequest-reason
 */
export const SupplyRequestReasonCode = {
  /**
   * Patient Care
   */
  PatientCare: "patient-care",

  /**
   * Ward Stock
   */
  WardStock: "ward-stock",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SupplyRequestReasonCode =
  typeof SupplyRequestReasonCode[keyof typeof SupplyRequestReasonCode];
