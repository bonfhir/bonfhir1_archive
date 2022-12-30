/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-PharmacySupplyEventStockReasonCode
 */
export const PharmacySupplyEventStockReasonCodeCode = {
  /**
   * pharmacy supply event stock reason
   */
  _PharmacySupplyEventStockReasonCode: "_PharmacySupplyEventStockReasonCode",

  /**
   * floor stock
   */
  FLRSTCK: "FLRSTCK",

  /**
   * long term care use
   */
  LTC: "LTC",

  /**
   * office use
   */
  OFFICE: "OFFICE",

  /**
   * pharmacy transfer
   */
  PHARM: "PHARM",

  /**
   * program use
   */
  PROG: "PROG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PharmacySupplyEventStockReasonCodeCode =
  typeof PharmacySupplyEventStockReasonCodeCode[keyof typeof PharmacySupplyEventStockReasonCodeCode];
