/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RepetitionsOutOfRange
 */
export const RepetitionsOutOfRangeCode = {
  /**
   * repetitions out of range
   */
  repetitionsoutofrange: "REP_RANGE",

  /**
   * repetitions above maximum
   */
  repetitionsabovemaximum: "MAXOCCURS",

  /**
   * repetitions below minimum
   */
  repetitionsbelowminimum: "MINOCCURS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RepetitionsOutOfRangeCode =
  typeof RepetitionsOutOfRangeCode[keyof typeof RepetitionsOutOfRangeCode];
