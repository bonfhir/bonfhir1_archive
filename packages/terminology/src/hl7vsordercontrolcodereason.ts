/**
 * Value Set of codes that describe reasons for the chosen order control codes.
 * http://terminology.hl7.org/ValueSet/v2-0949
 */
export const Hl7VSOrderControlCodeReasonCode = {
  /**
   * Cost
   */
  Cost: "CO",

  /**
   * Specimen Type
   */
  SpecimenType: "ST",

  /**
   * Specimen Volume
   */
  SpecimenVolume: "SV",

  /**
   * Unavailable test
   */
  Unavailabletest: "UN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSOrderControlCodeReasonCode =
  typeof Hl7VSOrderControlCodeReasonCode[keyof typeof Hl7VSOrderControlCodeReasonCode];
