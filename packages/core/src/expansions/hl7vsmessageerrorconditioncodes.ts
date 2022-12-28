/**
 * HL7 (communications) error codes, as transmitted in a message acknowledgement.
 * http://terminology.hl7.org/ValueSet/v2-0357
 */
export const Hl7VSMessageErrorConditionCodesCode = {
  /**
   * Message accepted
   */
  "0": "0",

  /**
   * Segment sequence error
   */
  "100": "100",

  /**
   * Required field missing
   */
  "101": "101",

  /**
   * Data type error
   */
  "102": "102",

  /**
   * Table value not found
   */
  "103": "103",

  /**
   * Value too long
   */
  "104": "104",

  /**
   * Non-Conformant Cardinality
   */
  "198": "198",

  /**
   * Other HL7 Error
   */
  "199": "199",

  /**
   * Unsupported message type
   */
  "200": "200",

  /**
   * Unsupported event code
   */
  "201": "201",

  /**
   * Unsupported processing id
   */
  "202": "202",

  /**
   * Unsupported version id
   */
  "203": "203",

  /**
   * Unknown key identifier
   */
  "204": "204",

  /**
   * Duplicate key identifier
   */
  "205": "205",

  /**
   * Application record locked
   */
  "206": "206",

  /**
   * Application error
   */
  "207": "207",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMessageErrorConditionCodesCode =
  typeof Hl7VSMessageErrorConditionCodesCode[keyof typeof Hl7VSMessageErrorConditionCodesCode];
