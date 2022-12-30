/**
 * Identifies types of dispensing events
 * http://terminology.hl7.org/ValueSet/v3-ActPharmacySupplyType
 */
export const ActPharmacySupplyTypeCode = {
  /**
   * Daily Fill
   */
  DF: "DF",

  /**
   * Emergency Supply
   */
  EM: "EM",

  /**
   * Script Owing
   */
  SO: "SO",

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

  /**
   * Floor stock
   */
  FS: "FS",

  /**
   * Manufacturer Sample
   */
  MS: "MS",

  /**
   * Refill
   */
  RF: "RF",

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

  /**
   * unit dose equivalent
   */
  UDE: "UDE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActPharmacySupplyTypeCode =
  typeof ActPharmacySupplyTypeCode[keyof typeof ActPharmacySupplyTypeCode];
