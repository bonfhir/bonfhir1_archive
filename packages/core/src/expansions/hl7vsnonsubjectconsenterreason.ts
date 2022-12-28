/**
 * Value Set of codes that specify a reason consent was granted by a person other than the subject of the consent.
 * http://terminology.hl7.org/ValueSet/v2-0502
 */
export const Hl7VSNonSubjectConsenterReasonCode = {
  /**
   * Subject is a minor
   */
  MIN: "MIN",

  /**
   * Subject is not competent to consent
   */
  NC: "NC",

  /**
   * Legally mandated
   */
  LM: "LM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSNonSubjectConsenterReasonCode =
  typeof Hl7VSNonSubjectConsenterReasonCode[keyof typeof Hl7VSNonSubjectConsenterReasonCode];
