/**
 * **Description:**Indicates why the prescription should be suspended.
 * http://terminology.hl7.org/ValueSet/v3-CombinedPharmacyOrderSuspendReasonCode
 */
export const CombinedPharmacyOrderSuspendReasonCodeCode = {
  /**
   * try another treatment first
   */
  ALTCHOICE: "ALTCHOICE",

  /**
   * prescription requires clarification
   */
  CLARIF: "CLARIF",

  /**
   * drug level too high
   */
  DRUGHIGH: "DRUGHIGH",

  /**
   * admission to hospital
   */
  HOSPADM: "HOSPADM",

  /**
   * lab interference issues
   */
  LABINT: "LABINT",

  /**
   * patient not-available
   */
  "NON-AVAIL": "NON-AVAIL",

  /**
   * parent is pregnant/breast feeding
   */
  PREG: "PREG",

  /**
   * allergy
   */
  SALG: "SALG",

  /**
   * drug interacts with another drug
   */
  SDDI: "SDDI",

  /**
   * duplicate therapy
   */
  SDUPTHER: "SDUPTHER",

  /**
   * suspected intolerance
   */
  SINTOL: "SINTOL",

  /**
   * patient scheduled for surgery
   */
  SURG: "SURG",

  /**
   * waiting for old drug to wash out
   */
  WASHOUT: "WASHOUT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CombinedPharmacyOrderSuspendReasonCodeCode =
  typeof CombinedPharmacyOrderSuspendReasonCodeCode[keyof typeof CombinedPharmacyOrderSuspendReasonCodeCode];
