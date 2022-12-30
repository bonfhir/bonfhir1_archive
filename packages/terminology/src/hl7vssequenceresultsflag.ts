/**
 * Value Set of codes that specify the sequencing relationship between the current service request and a related service request(s) specified in the same information model structure.
 * http://terminology.hl7.org/ValueSet/v2-0503
 */
export const Hl7VSSequenceResultsFlagCode = {
  /**
   * Sequential
   */
  S: "S",

  /**
   * Cyclical
   */
  C: "C",

  /**
   * Reserved for future use
   */
  R: "R",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSequenceResultsFlagCode =
  typeof Hl7VSSequenceResultsFlagCode[keyof typeof Hl7VSSequenceResultsFlagCode];
