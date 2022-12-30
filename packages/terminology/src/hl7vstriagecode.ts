/**
 * Value Set of codes specifying a patient's prioritization within the context of this abstract.
 * http://terminology.hl7.org/ValueSet/v2-0422
 */
export const Hl7VSTriageCodeCode = {
  /**
   * Non-acute
   */
  "1": "1",

  /**
   * Acute
   */
  "2": "2",

  /**
   * Urgent
   */
  "3": "3",

  /**
   * Severe
   */
  "4": "4",

  /**
   * Dead on Arrival (DOA)
   */
  "5": "5",

  /**
   * Other
   */
  "99": "99",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTriageCodeCode =
  typeof Hl7VSTriageCodeCode[keyof typeof Hl7VSTriageCodeCode];
