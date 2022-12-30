/**
 * The initial fill against an order. (This includes initial fills against refill orders.)
 * http://terminology.hl7.org/ValueSet/v3-FirstFillPharmacySupplyType
 */
export const FirstFillPharmacySupplyTypeCode = {
  /**
   * First Fill
   */
  FF: "FF",

  /**
   * fee for service
   */
  FFS: "FFS",

  /**
   * first fill, part fill, partial strength
   */
  FFPS: "FFPS",

  /**
   * first fill complete, partial strength
   */
  FFCS: "FFCS",

  /**
   * trial fill partial strength
   */
  TFS: "TFS",

  /**
   * First Fill - Complete
   */
  FFC: "FFC",

  /**
   * First Fill - Part Fill
   */
  FFP: "FFP",

  /**
   * first fill, partial strength
   */
  FFSS: "FFSS",

  /**
   * Trial Fill
   */
  TF: "TF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FirstFillPharmacySupplyTypeCode =
  typeof FirstFillPharmacySupplyTypeCode[keyof typeof FirstFillPharmacySupplyTypeCode];
