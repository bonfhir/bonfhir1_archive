/**
 * Provides codes associated with ActClass value of LIST (working list)
 * http://terminology.hl7.org/ValueSet/v3-ActListCode
 */
export const ActListCodeCode = {
  /**
   * ActObservationList
   */
  _ActObservationList: "_ActObservationList",

  /**
   * care plan
   */
  CARELIST: "CARELIST",

  /**
   * condition list
   */
  CONDLIST: "CONDLIST",

  /**
   * intolerance list
   */
  INTOLIST: "INTOLIST",

  /**
   * problem list
   */
  PROBLIST: "PROBLIST",

  /**
   * risk factors
   */
  RISKLIST: "RISKLIST",

  /**
   * goal list
   */
  GOALLIST: "GOALLIST",

  /**
   * ActTherapyDurationWorkingListCode
   */
  _ActTherapyDurationWorkingListCode: "_ActTherapyDurationWorkingListCode",

  /**
   * act medication therapy duration working list
   */
  _ActMedicationTherapyDurationWorkingListCode:
    "_ActMedicationTherapyDurationWorkingListCode",

  /**
   * short term/acute
   */
  ACU: "ACU",

  /**
   * continuous/chronic
   */
  CHRON: "CHRON",

  /**
   * one time
   */
  ONET: "ONET",

  /**
   * as needed
   */
  PRN: "PRN",

  /**
   * medication list
   */
  MEDLIST: "MEDLIST",

  /**
   * current medication list
   */
  CURMEDLIST: "CURMEDLIST",

  /**
   * discharge medication list
   */
  DISCMEDLIST: "DISCMEDLIST",

  /**
   * medication history
   */
  HISTMEDLIST: "HISTMEDLIST",

  /**
   * ActProcedureCategoryList
   */
  _ActProcedureCategoryList: "_ActProcedureCategoryList",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActListCodeCode =
  typeof ActListCodeCode[keyof typeof ActListCodeCode];
