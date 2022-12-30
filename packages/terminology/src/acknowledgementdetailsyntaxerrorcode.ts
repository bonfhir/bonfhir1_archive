/**
 * Reflects errors in the syntax or structure of the communication.
 * http://terminology.hl7.org/ValueSet/v3-AcknowledgementDetailSyntaxErrorCode
 */
export const AcknowledgementDetailSyntaxErrorCodeCode = {
  /**
   * Syntax error
   */
  SYN: "SYN",

  /**
   * Data type error
   */
  SYN102: "SYN102",

  /**
   * Required element missing
   */
  SYN105: "SYN105",

  /**
   * Required association missing
   */
  SYN100: "SYN100",

  /**
   * Required attribute missing
   */
  SYN101: "SYN101",

  /**
   * Insufficient repetitions
   */
  SYN114: "SYN114",

  /**
   * Terminology error
   */
  SYN106: "SYN106",

  /**
   * Value not found in code system
   */
  SYN103: "SYN103",

  /**
   * Invalid code system in CNE
   */
  SYN104: "SYN104",

  /**
   * Deprecated code
   */
  SYN107: "SYN107",

  /**
   * Number of repetitions exceeds limit
   */
  SYN108: "SYN108",

  /**
   * Number of association repetitions exceeds limit
   */
  SYN110: "SYN110",

  /**
   * Number of attribute repetitions exceeds limit
   */
  SYN112: "SYN112",

  /**
   * Mandatory element with null value
   */
  SYN109: "SYN109",

  /**
   * Value does not match fixed value
   */
  SYN111: "SYN111",

  /**
   * Formal constraint violation
   */
  SYN113: "SYN113",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AcknowledgementDetailSyntaxErrorCodeCode =
  typeof AcknowledgementDetailSyntaxErrorCodeCode[keyof typeof AcknowledgementDetailSyntaxErrorCodeCode];
