/**
 * HL7 (communications) error codes, as transmitted in a message acknowledgement.
 * http://terminology.hl7.org/ValueSet/v2-0357
 */
export const Hl7VSMessageErrorConditionCodesCode = {
  /**
   * Message accepted
   */
  Messageaccepted: "0",

  /**
   * Segment sequence error
   */
  Segmentsequenceerror: "100",

  /**
   * Required field missing
   */
  Requiredfieldmissing: "101",

  /**
   * Data type error
   */
  Datatypeerror: "102",

  /**
   * Table value not found
   */
  Tablevaluenotfound: "103",

  /**
   * Value too long
   */
  Valuetoolong: "104",

  /**
   * Non-Conformant Cardinality
   */
  NonConformantCardinality: "198",

  /**
   * Other HL7 Error
   */
  OtherHL7Error: "199",

  /**
   * Unsupported message type
   */
  Unsupportedmessagetype: "200",

  /**
   * Unsupported event code
   */
  Unsupportedeventcode: "201",

  /**
   * Unsupported processing id
   */
  Unsupportedprocessingid: "202",

  /**
   * Unsupported version id
   */
  Unsupportedversionid: "203",

  /**
   * Unknown key identifier
   */
  Unknownkeyidentifier: "204",

  /**
   * Duplicate key identifier
   */
  Duplicatekeyidentifier: "205",

  /**
   * Application record locked
   */
  Applicationrecordlocked: "206",

  /**
   * Application error
   */
  Applicationerror: "207",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMessageErrorConditionCodesCode =
  typeof Hl7VSMessageErrorConditionCodesCode[keyof typeof Hl7VSMessageErrorConditionCodesCode];
