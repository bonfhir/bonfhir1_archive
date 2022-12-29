/**
 * Provides codes associated with ActClass value of LIST (working list)
 * http://terminology.hl7.org/ValueSet/v3-ActListCode
 */
export const ActListCodeCode = {
  /**
   * ActObservationList
   */
  ActObservationList: "_ActObservationList",

  /**
   * care plan
   */
  careplan: "CARELIST",

  /**
   * condition list
   */
  conditionlist: "CONDLIST",

  /**
   * intolerance list
   */
  intolerancelist: "INTOLIST",

  /**
   * problem list
   */
  problemlist: "PROBLIST",

  /**
   * risk factors
   */
  riskfactors: "RISKLIST",

  /**
   * goal list
   */
  goallist: "GOALLIST",

  /**
   * ActTherapyDurationWorkingListCode
   */
  ActTherapyDurationWorkingListCode: "_ActTherapyDurationWorkingListCode",

  /**
   * act medication therapy duration working list
   */
  actmedicationtherapydurationworkinglist:
    "_ActMedicationTherapyDurationWorkingListCode",

  /**
   * short term/acute
   */
  shorttermacute: "ACU",

  /**
   * continuous/chronic
   */
  continuouschronic: "CHRON",

  /**
   * one time
   */
  onetime: "ONET",

  /**
   * as needed
   */
  asneeded: "PRN",

  /**
   * medication list
   */
  medicationlist: "MEDLIST",

  /**
   * current medication list
   */
  currentmedicationlist: "CURMEDLIST",

  /**
   * discharge medication list
   */
  dischargemedicationlist: "DISCMEDLIST",

  /**
   * medication history
   */
  medicationhistory: "HISTMEDLIST",

  /**
   * ActProcedureCategoryList
   */
  ActProcedureCategoryList: "_ActProcedureCategoryList",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActListCodeCode =
  typeof ActListCodeCode[keyof typeof ActListCodeCode];
