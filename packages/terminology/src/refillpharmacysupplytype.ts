/**
 * A fill against an order that has already been filled (or partially filled) at least once.
 * http://terminology.hl7.org/ValueSet/v3-RefillPharmacySupplyType
 */
export const RefillPharmacySupplyTypeCode = {
  /**
   * Refill
   */
  Refill: "RF",

  /**
   * Daily Fill
   */
  DailyFill: "DF",

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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RefillPharmacySupplyTypeCode =
  typeof RefillPharmacySupplyTypeCode[keyof typeof RefillPharmacySupplyTypeCode];
