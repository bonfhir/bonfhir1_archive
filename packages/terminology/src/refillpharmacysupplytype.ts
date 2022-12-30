/**
 * A fill against an order that has already been filled (or partially filled) at least once.
 * http://terminology.hl7.org/ValueSet/v3-RefillPharmacySupplyType
 */
export const RefillPharmacySupplyTypeCode = {
  /**
   * Refill
   */
  RF: "RF",

  /**
   * Daily Fill
   */
  DF: "DF",

  /**
   * Unit Dose
   */
  UD: "UD",

  /**
   * Refill - Complete
   */
  RFC: "RFC",

  /**
   * refill complete partial strength
   */
  RFCS: "RFCS",

  /**
   * Refill (First fill this facility)
   */
  RFF: "RFF",

  /**
   * refill partial strength (first fill this facility)
   */
  RFFS: "RFFS",

  /**
   * Refill - Part Fill
   */
  RFP: "RFP",

  /**
   * refill part fill partial strength
   */
  RFPS: "RFPS",

  /**
   * refill partial strength
   */
  RFS: "RFS",

  /**
   * Trial Balance
   */
  TB: "TB",

  /**
   * trial balance partial strength
   */
  TBS: "TBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RefillPharmacySupplyTypeCode =
  typeof RefillPharmacySupplyTypeCode[keyof typeof RefillPharmacySupplyTypeCode];
