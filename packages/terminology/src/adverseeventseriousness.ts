/**
 * Overall seriousness of this event for the patient.
 * http://terminology.hl7.org/ValueSet/adverse-event-seriousness
 */
export const AdverseEventSeriousnessCode = {
  /**
   * Non-serious
   */
  Nonserious: "non-serious",

  /**
   * Serious
   */
  Serious: "serious",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdverseEventSeriousnessCode =
  typeof AdverseEventSeriousnessCode[keyof typeof AdverseEventSeriousnessCode];
