/**
 * Value Set of codes that describe reasons for the chosen order control codes.
 * http://terminology.hl7.org/ValueSet/v2-0949
 */
export const Hl7VSOrderControlCodeReasonCode = {
  /**
   * Cost
   */
  CO: "CO",

  /**
   * Specimen Type
   */
  ST: "ST",

  /**
   * Specimen Volume
   */
  SV: "SV",

  /**
   * Unavailable test
   */
  UN: "UN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSOrderControlCodeReasonCode =
  typeof Hl7VSOrderControlCodeReasonCode[keyof typeof Hl7VSOrderControlCodeReasonCode];
