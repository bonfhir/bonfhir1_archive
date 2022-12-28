/**
 * Status of the supply request.
 * http://hl7.org/fhir/ValueSet/supplyrequest-status
 */
export const SupplyRequestStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SupplyRequestStatusCode =
  typeof SupplyRequestStatusCode[keyof typeof SupplyRequestStatusCode];
