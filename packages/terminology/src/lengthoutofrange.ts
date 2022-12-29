/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-LengthOutOfRange
 */
export const LengthOutOfRangeCode = {
  /**
   * length out of range
   */
  lengthoutofrange: "LEN_RANGE",

  /**
   * length is too long
   */
  lengthistoolong: "LEN_LONG",

  /**
   * length is too short
   */
  lengthistooshort: "LEN_SHORT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LengthOutOfRangeCode =
  typeof LengthOutOfRangeCode[keyof typeof LengthOutOfRangeCode];
