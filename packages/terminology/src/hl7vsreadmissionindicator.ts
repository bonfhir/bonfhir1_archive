/**
 * Value Set of codes which are used to specify that a patient is being re-admitted to a healthcare facility from which they were discharged, and indicates the circumstances around such re-admission.
 * http://terminology.hl7.org/ValueSet/v2-0092
 */
export const Hl7VSReAdmissionIndicatorCode = {
  /**
   * Re-admission
   */
  Readmission: "R",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSReAdmissionIndicatorCode =
  typeof Hl7VSReAdmissionIndicatorCode[keyof typeof Hl7VSReAdmissionIndicatorCode];
