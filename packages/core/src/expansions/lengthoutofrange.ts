/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-LengthOutOfRange
 */
export const LengthOutOfRangeCode = {
  /**
   * length out of range
   */
  LEN_RANGE: "LEN_RANGE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LengthOutOfRangeCode =
  typeof LengthOutOfRangeCode[keyof typeof LengthOutOfRangeCode];
