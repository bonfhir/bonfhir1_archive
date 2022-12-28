/**
 * This value sets refers to a specific supply item.
 * http://hl7.org/fhir/ValueSet/supplydelivery-type
 */
export const SupplyItemTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SupplyItemTypeCode =
  typeof SupplyItemTypeCode[keyof typeof SupplyItemTypeCode];
