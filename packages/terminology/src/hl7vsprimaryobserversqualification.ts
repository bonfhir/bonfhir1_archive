/**
 * Value Set of codes that provide a general description of the kind of health care professional who provided the primary observation.
 * http://terminology.hl7.org/ValueSet/v2-0242
 */
export const Hl7VSPrimaryObserverSQualificationCode = {
  /**
   * Physician (osteopath, homeopath)
   */
  Physicianosteopathhomeopath: "P",

  /**
   * Pharmacist
   */
  Pharmacist: "R",

  /**
   * Mid-level professional (nurse, nurse practitioner, physician's assistant)
   */
  Midlevelprofessionalnursenursepractitionerphysiciansassistant: "M",

  /**
   * Other health professional
   */
  Otherhealthprofessional: "H",

  /**
   * Health care consumer/patient
   */
  Healthcareconsumerpatient: "C",

  /**
   * Lawyer/attorney
   */
  Lawyerattorney: "L",

  /**
   * Other non-health professional
   */
  Othernonhealthprofessional: "O",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPrimaryObserverSQualificationCode =
  typeof Hl7VSPrimaryObserverSQualificationCode[keyof typeof Hl7VSPrimaryObserverSQualificationCode];
