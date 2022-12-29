/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-TelecommunicationAddressUse
 */
export const TelecommunicationAddressUseCode = {
  /**
   * answering service
   */
  answeringservice: "AS",

  /**
   * bad address
   */
  badaddress: "BAD",

  /**
   * direct
   */
  direct: "DIR",

  /**
   * emergency contact
   */
  emergencycontact: "EC",

  /**
   * home address
   */
  homeaddress: "H",

  /**
   * primary home
   */
  primaryhome: "HP",

  /**
   * vacation home
   */
  vacationhome: "HV",

  /**
   * mobile contact)
   */
  mobilecontact: "MC",

  /**
   * pager
   */
  pager: "PG",

  /**
   * public
   */
  public: "PUB",

  /**
   * temporary address
   */
  temporaryaddress: "TMP",

  /**
   * work place
   */
  workplace: "WP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TelecommunicationAddressUseCode =
  typeof TelecommunicationAddressUseCode[keyof typeof TelecommunicationAddressUseCode];
