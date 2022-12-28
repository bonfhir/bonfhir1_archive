/**
 * This value sets refers to a specific supply item.
 * http://terminology.hl7.org/ValueSet/supplydelivery-type
 */
export const SupplyItemTypeCode = {
  /**
   * Medication
   */
  medication: "medication",

  /**
   * Device
   */
  device: "device",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SupplyItemTypeCode =
  typeof SupplyItemTypeCode[keyof typeof SupplyItemTypeCode];
