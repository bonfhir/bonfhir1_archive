/**
 * MedicationRequest Status Reason Codes
 * http://terminology.hl7.org/ValueSet/medicationrequest-status-reason
 */
export const MedicationRequestStatusReasonCodesCode = {
  /**
   * Try another treatment first
   */
  altchoice: "altchoice",

  /**
   * Prescription requires clarification
   */
  clarif: "clarif",

  /**
   * Drug level too high
   */
  drughigh: "drughigh",

  /**
   * Admission to hospital
   */
  hospadm: "hospadm",

  /**
   * Lab interference issues
   */
  labint: "labint",

  /**
   * Patient not available
   */
  "non-avail": "non-avail",

  /**
   * Parent is pregnant/breast feeding
   */
  preg: "preg",

  /**
   * Allergy
   */
  salg: "salg",

  /**
   * Drug interacts with another drug
   */
  sddi: "sddi",

  /**
   * Duplicate therapy
   */
  sdupther: "sdupther",

  /**
   * Suspected intolerance
   */
  sintol: "sintol",

  /**
   * Patient scheduled for surgery.
   */
  surg: "surg",

  /**
   * Waiting for old drug to wash out
   */
  washout: "washout",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationRequestStatusReasonCodesCode =
  typeof MedicationRequestStatusReasonCodesCode[keyof typeof MedicationRequestStatusReasonCodesCode];
