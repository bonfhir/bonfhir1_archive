/**
 * Codes identifying the lifecycle stage of a ChargeItem.
 * http://hl7.org/fhir/ValueSet/chargeitem-status
 */
export const ChargeItemStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ChargeItemStatusCode =
  typeof ChargeItemStatusCode[keyof typeof ChargeItemStatusCode];
