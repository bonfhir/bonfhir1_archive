/**
 * Example set of codes that can be used for billing purposes.
 * http://hl7.org/fhir/ValueSet/chargeitem-billingcodes
 */
export const ChargeItemCodeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ChargeItemCodeCode =
  typeof ChargeItemCodeCode[keyof typeof ChargeItemCodeCode];
