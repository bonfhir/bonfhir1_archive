/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-TelecommunicationAddressUse
 */
export const TelecommunicationAddressUseCode = {
  /**
   * answering service
   */
  AS: "AS",

  /**
   * bad address
   */
  BAD: "BAD",

  /**
   * direct
   */
  DIR: "DIR",

  /**
   * emergency contact
   */
  EC: "EC",

  /**
   * home address
   */
  H: "H",

  /**
   * primary home
   */
  HP: "HP",

  /**
   * vacation home
   */
  HV: "HV",

  /**
   * mobile contact)
   */
  MC: "MC",

  /**
   * pager
   */
  PG: "PG",

  /**
   * public
   */
  PUB: "PUB",

  /**
   * temporary address
   */
  TMP: "TMP",

  /**
   * work place
   */
  WP: "WP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TelecommunicationAddressUseCode =
  typeof TelecommunicationAddressUseCode[keyof typeof TelecommunicationAddressUseCode];
