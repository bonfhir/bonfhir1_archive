/**
 * The reason why the supply item was requested.
 * http://hl7.org/fhir/ValueSet/supplyrequest-reason
 */
export const SupplyRequestReasonCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SupplyRequestReasonCode =
  typeof SupplyRequestReasonCode[keyof typeof SupplyRequestReasonCode];
