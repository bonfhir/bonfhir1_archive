/**
 * MedicationRequest Status Reason Codes
 * http://terminology.hl7.org/ValueSet/medicationrequest-status-reason
 */
export const MedicationRequestStatusReasonCodesCode = {
  /**
   * Try another treatment first
   */
  Tryanothertreatmentfirst: "altchoice",

  /**
   * Prescription requires clarification
   */
  Prescriptionrequiresclarification: "clarif",

  /**
   * Drug level too high
   */
  Drugleveltoohigh: "drughigh",

  /**
   * Admission to hospital
   */
  Admissiontohospital: "hospadm",

  /**
   * Lab interference issues
   */
  Labinterferenceissues: "labint",

  /**
   * Patient not available
   */
  Patientnotavailable: "non-avail",

  /**
   * Parent is pregnant/breast feeding
   */
  Parentispregnantbreastfeeding: "preg",

  /**
   * Allergy
   */
  Allergy: "salg",

  /**
   * Drug interacts with another drug
   */
  Druginteractswithanotherdrug: "sddi",

  /**
   * Duplicate therapy
   */
  Duplicatetherapy: "sdupther",

  /**
   * Suspected intolerance
   */
  Suspectedintolerance: "sintol",

  /**
   * Patient scheduled for surgery.
   */
  Patientscheduledforsurgery: "surg",

  /**
   * Waiting for old drug to wash out
   */
  Waitingforolddrugtowashout: "washout",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationRequestStatusReasonCodesCode =
  typeof MedicationRequestStatusReasonCodesCode[keyof typeof MedicationRequestStatusReasonCodesCode];
