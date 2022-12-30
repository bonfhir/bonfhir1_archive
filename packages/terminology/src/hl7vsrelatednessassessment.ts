/**
 * Value Set of codes that provide an estimate of whether an issue with a  product was the cause of an event.
 * http://terminology.hl7.org/ValueSet/v2-0250
 */
export const Hl7VSRelatednessAssessmentCode = {
  /**
   * Highly probable
   */
  H: "H",

  /**
   * Moderately probable
   */
  M: "M",

  /**
   * Somewhat probable
   */
  S: "S",

  /**
   * Improbable
   */
  I: "I",

  /**
   * Not related
   */
  N: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRelatednessAssessmentCode =
  typeof Hl7VSRelatednessAssessmentCode[keyof typeof Hl7VSRelatednessAssessmentCode];
