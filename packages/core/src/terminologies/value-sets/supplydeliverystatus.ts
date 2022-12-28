/**
 * Status of the supply delivery.
 * http://hl7.org/fhir/ValueSet/supplydelivery-status
 */
export const SupplyDeliveryStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SupplyDeliveryStatusCode =
  typeof SupplyDeliveryStatusCode[keyof typeof SupplyDeliveryStatusCode];
