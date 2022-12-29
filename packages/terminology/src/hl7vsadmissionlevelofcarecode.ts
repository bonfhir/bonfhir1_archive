/**
 * Value Set of codes specifying the acuity level assigned to the patient at the time of admission.
 * http://terminology.hl7.org/ValueSet/v2-0432
 */
export const Hl7VSAdmissionLevelOfCareCodeCode = {
  /**
   * Acute
   */
  Acute: "AC",

  /**
   * Chronic
   */
  Chronic: "CH",

  /**
   * Comatose
   */
  Comatose: "CO",

  /**
   * Critical
   */
  Critical: "CR",

  /**
   * Improved
   */
  Improved: "IM",

  /**
   * Moribund
   */
  Moribund: "MO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAdmissionLevelOfCareCodeCode =
  typeof Hl7VSAdmissionLevelOfCareCodeCode[keyof typeof Hl7VSAdmissionLevelOfCareCodeCode];
