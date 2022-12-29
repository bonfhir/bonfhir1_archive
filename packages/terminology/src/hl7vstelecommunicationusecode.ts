/**
 * Concepts for specifying a specific use of a telecommunication number.
 * http://terminology.hl7.org/ValueSet/v2-0201
 */
export const Hl7VSTelecommunicationUseCodeCode = {
  /**
   * Primary Residence Number
   */
  PrimaryResidenceNumber: "PRN",

  /**
   * Other Residence Number
   */
  OtherResidenceNumber: "ORN",

  /**
   * Work Number
   */
  WorkNumber: "WPN",

  /**
   * Vacation Home Number
   */
  VacationHomeNumber: "VHN",

  /**
   * Answering Service Number
   */
  AnsweringServiceNumber: "ASN",

  /**
   * Emergency Number
   */
  EmergencyNumber: "EMR",

  /**
   * Network (email) Address
   */
  NetworkemailAddress: "NET",

  /**
   * Beeper Number
   */
  BeeperNumber: "BPN",

  /**
   * Personal
   */
  Personal: "PRS",

  /**
   * Direct Secure Messaging
   */
  DirectSecureMessaging: "DSM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTelecommunicationUseCodeCode =
  typeof Hl7VSTelecommunicationUseCodeCode[keyof typeof Hl7VSTelecommunicationUseCodeCode];
