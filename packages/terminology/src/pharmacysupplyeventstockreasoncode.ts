/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-PharmacySupplyEventStockReasonCode
 */
export const PharmacySupplyEventStockReasonCodeCode = {
  /**
   * pharmacy supply event stock reason
   */
  pharmacysupplyeventstockreason: "_PharmacySupplyEventStockReasonCode",

  /**
   * floor stock
   */
  floorstock: "FLRSTCK",

  /**
   * long term care use
   */
  longtermcareuse: "LTC",

  /**
   * office use
   */
  officeuse: "OFFICE",

  /**
   * pharmacy transfer
   */
  pharmacytransfer: "PHARM",

  /**
   * program use
   */
  programuse: "PROG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PharmacySupplyEventStockReasonCodeCode =
  typeof PharmacySupplyEventStockReasonCodeCode[keyof typeof PharmacySupplyEventStockReasonCodeCode];
