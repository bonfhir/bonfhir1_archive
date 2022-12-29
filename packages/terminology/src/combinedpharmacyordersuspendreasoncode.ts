/**
 * **Description:**Indicates why the prescription should be suspended.
 * http://terminology.hl7.org/ValueSet/v3-CombinedPharmacyOrderSuspendReasonCode
 */
export const CombinedPharmacyOrderSuspendReasonCodeCode = {
  /**
   * try another treatment first
   */
  tryanothertreatmentfirst: "ALTCHOICE",

  /**
   * prescription requires clarification
   */
  prescriptionrequiresclarification: "CLARIF",

  /**
   * drug level too high
   */
  drugleveltoohigh: "DRUGHIGH",

  /**
   * admission to hospital
   */
  admissiontohospital: "HOSPADM",

  /**
   * lab interference issues
   */
  labinterferenceissues: "LABINT",

  /**
   * patient not-available
   */
  patientnotavailable: "NON-AVAIL",

  /**
   * parent is pregnant/breast feeding
   */
  parentispregnantbreastfeeding: "PREG",

  /**
   * allergy
   */
  allergy: "SALG",

  /**
   * drug interacts with another drug
   */
  druginteractswithanotherdrug: "SDDI",

  /**
   * duplicate therapy
   */
  duplicatetherapy: "SDUPTHER",

  /**
   * suspected intolerance
   */
  suspectedintolerance: "SINTOL",

  /**
   * patient scheduled for surgery
   */
  patientscheduledforsurgery: "SURG",

  /**
   * waiting for old drug to wash out
   */
  waitingforolddrugtowashout: "WASHOUT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CombinedPharmacyOrderSuspendReasonCodeCode =
  typeof CombinedPharmacyOrderSuspendReasonCodeCode[keyof typeof CombinedPharmacyOrderSuspendReasonCodeCode];
