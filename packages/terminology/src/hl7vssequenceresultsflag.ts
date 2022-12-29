/**
 * Value Set of codes that specify the sequencing relationship between the current service request and a related service request(s) specified in the same information model structure.
 * http://terminology.hl7.org/ValueSet/v2-0503
 */
export const Hl7VSSequenceResultsFlagCode = {
  /**
   * Sequential
   */
  Sequential: "S",

  /**
   * Cyclical
   */
  Cyclical: "C",

  /**
   * Reserved for future use
   */
  Reservedforfutureuse: "R",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSequenceResultsFlagCode =
  typeof Hl7VSSequenceResultsFlagCode[keyof typeof Hl7VSSequenceResultsFlagCode];
