/**
 * Concepts for specifying a specific use of a telecommunication number.
 * http://terminology.hl7.org/ValueSet/v2-0201
 */
export const Hl7VSTelecommunicationUseCodeCode = {
  /**
   * Primary Residence Number
   */
  PRN: "PRN",

  /**
   * Other Residence Number
   */
  ORN: "ORN",

  /**
   * Work Number
   */
  WPN: "WPN",

  /**
   * Vacation Home Number
   */
  VHN: "VHN",

  /**
   * Answering Service Number
   */
  ASN: "ASN",

  /**
   * Emergency Number
   */
  EMR: "EMR",

  /**
   * Network (email) Address
   */
  NET: "NET",

  /**
   * Beeper Number
   */
  BPN: "BPN",

  /**
   * Personal
   */
  PRS: "PRS",

  /**
   * Direct Secure Messaging
   */
  DSM: "DSM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTelecommunicationUseCodeCode =
  typeof Hl7VSTelecommunicationUseCodeCode[keyof typeof Hl7VSTelecommunicationUseCodeCode];
