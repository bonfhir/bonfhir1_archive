/**
 * The initial fill against an order. (This includes initial fills against refill orders.)
 * http://terminology.hl7.org/ValueSet/v3-FirstFillPharmacySupplyType
 */
export const FirstFillPharmacySupplyTypeCode = {
  /**
   * First Fill
   */
  FirstFill: "FF",

  /**
   * fee for service
   */
  feeforservice: "FFS",

  /**
   * first fill, part fill, partial strength
   */
  firstfillpartfillpartialstrength: "FFPS",

  /**
   * first fill complete, partial strength
   */
  firstfillcompletepartialstrength: "FFCS",

  /**
   * trial fill partial strength
   */
  trialfillpartialstrength: "TFS",

  /**
   * First Fill - Complete
   */
  FirstFillComplete: "FFC",

  /**
   * First Fill - Part Fill
   */
  FirstFillPartFill: "FFP",

  /**
   * first fill, partial strength
   */
  firstfillpartialstrength: "FFSS",

  /**
   * Trial Fill
   */
  TrialFill: "TF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FirstFillPharmacySupplyTypeCode =
  typeof FirstFillPharmacySupplyTypeCode[keyof typeof FirstFillPharmacySupplyTypeCode];
