/**
 * This value sets refers to a Category of supply.
 * http://terminology.hl7.org/ValueSet/supplyrequest-kind
 */
export const SupplyTypeCode = {
  /**
   * Central Supply
   */
  CentralSupply: "central",

  /**
   * Non-Stock
   */
  NonStock: "nonstock",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SupplyTypeCode = typeof SupplyTypeCode[keyof typeof SupplyTypeCode];
