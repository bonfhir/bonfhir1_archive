/**
 * Value Set of codes that provide a general description of the kind of health care professional who provided the primary observation.
 * http://terminology.hl7.org/ValueSet/v2-0242
 */
export const Hl7VSPrimaryObserverSQualificationCode = {
  /**
   * Physician (osteopath, homeopath)
   */
  P: "P",

  /**
   * Pharmacist
   */
  R: "R",

  /**
   * Mid-level professional (nurse, nurse practitioner, physician's assistant)
   */
  M: "M",

  /**
   * Other health professional
   */
  H: "H",

  /**
   * Health care consumer/patient
   */
  C: "C",

  /**
   * Lawyer/attorney
   */
  L: "L",

  /**
   * Other non-health professional
   */
  O: "O",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPrimaryObserverSQualificationCode =
  typeof Hl7VSPrimaryObserverSQualificationCode[keyof typeof Hl7VSPrimaryObserverSQualificationCode];
