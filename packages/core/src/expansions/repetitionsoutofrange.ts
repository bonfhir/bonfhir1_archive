/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RepetitionsOutOfRange
 */
export const RepetitionsOutOfRangeCode = {
  /**
   * repetitions out of range
   */
  REP_RANGE: "REP_RANGE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RepetitionsOutOfRangeCode =
  typeof RepetitionsOutOfRangeCode[keyof typeof RepetitionsOutOfRangeCode];
