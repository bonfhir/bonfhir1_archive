/**
 * A site specific problem code
 * http://terminology.hl7.org/ValueSet/v3-AcknowledgementDetailCode
 */
export const AcknowledgementDetailCodeCode = {
  /**
   * Internal system error
   */
  INTERR: "INTERR",

  /**
   * No storage space for message.
   */
  NOSTORE: "NOSTORE",

  /**
   * Message routing error, destination unreachable.
   */
  RTEDEST: "RTEDEST",

  /**
   * Error: Message routing error, unknown destination.
   */
  RTUDEST: "RTUDEST",

  /**
   * Message routing warning, destination unreachable.
   */
  RTWDEST: "RTWDEST",

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

  /**
   * Unsupported interaction
   */
  NS200: "NS200",

  /**
   * Unsupported processing id
   */
  NS202: "NS202",

  /**
   * Unsupported version id
   */
  NS203: "NS203",

  /**
   * Unsupported processing Mode
   */
  NS250: "NS250",

  /**
   * Unknown sender
   */
  NS260: "NS260",

  /**
   * Unrecognized attentionline
   */
  NS261: "NS261",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AcknowledgementDetailCodeCode =
  typeof AcknowledgementDetailCodeCode[keyof typeof AcknowledgementDetailCodeCode];
