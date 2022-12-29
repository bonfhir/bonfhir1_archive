/**
 * Value Set of codes specifying a patient's prioritization within the context of this abstract.
 * http://terminology.hl7.org/ValueSet/v2-0422
 */
export const Hl7VSTriageCodeCode = {
  /**
   * Non-acute
   */
  Nonacute: "1",

  /**
   * Acute
   */
  Acute: "2",

  /**
   * Urgent
   */
  Urgent: "3",

  /**
   * Severe
   */
  Severe: "4",

  /**
   * Dead on Arrival (DOA)
   */
  DeadonArrivalDOA: "5",

  /**
   * Other
   */
  Other: "99",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTriageCodeCode =
  typeof Hl7VSTriageCodeCode[keyof typeof Hl7VSTriageCodeCode];
