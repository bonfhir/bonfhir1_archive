/**
 * This value sets refers to a Category of supply.
 * http://hl7.org/fhir/ValueSet/supplyrequest-kind
 */
export const SupplyTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SupplyTypeCode = typeof SupplyTypeCode[keyof typeof SupplyTypeCode];
