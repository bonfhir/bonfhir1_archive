/**
 * A fill against an order that has already been filled (or partially filled) at least once.
 * http://terminology.hl7.org/ValueSet/v3-RefillPharmacySupplyType
 */
export const RefillPharmacySupplyTypeCode = {
  /**
   * Refill
   */
  RF: "RF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RefillPharmacySupplyTypeCode =
  typeof RefillPharmacySupplyTypeCode[keyof typeof RefillPharmacySupplyTypeCode];
