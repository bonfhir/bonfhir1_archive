/**
 * Identifies types of dispensing events
 * http://terminology.hl7.org/ValueSet/v3-ActPharmacySupplyType
 */
export const ActPharmacySupplyTypeCode = {
  /**
   * Daily Fill
   */
  DailyFill: "DF",

  /**
   * Emergency Supply
   */
  EmergencySupply: "EM",

  /**
   * Script Owing
   */
  ScriptOwing: "SO",

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

  /**
   * Floor stock
   */
  Floorstock: "FS",

  /**
   * Manufacturer Sample
   */
  ManufacturerSample: "MS",

  /**
   * Refill
   */
  Refill: "RF",

  /**
   * Unit Dose
   */
  UnitDose: "UD",

  /**
   * Refill - Complete
   */
  RefillComplete: "RFC",

  /**
   * refill complete partial strength
   */
  refillcompletepartialstrength: "RFCS",

  /**
   * Refill (First fill this facility)
   */
  RefillFirstfillthisfacility: "RFF",

  /**
   * refill partial strength (first fill this facility)
   */
  refillpartialstrengthfirstfillthisfacility: "RFFS",

  /**
   * Refill - Part Fill
   */
  RefillPartFill: "RFP",

  /**
   * refill part fill partial strength
   */
  refillpartfillpartialstrength: "RFPS",

  /**
   * refill partial strength
   */
  refillpartialstrength: "RFS",

  /**
   * Trial Balance
   */
  TrialBalance: "TB",

  /**
   * trial balance partial strength
   */
  trialbalancepartialstrength: "TBS",

  /**
   * unit dose equivalent
   */
  unitdoseequivalent: "UDE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActPharmacySupplyTypeCode =
  typeof ActPharmacySupplyTypeCode[keyof typeof ActPharmacySupplyTypeCode];
