/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-AddressUse
 */
export const AddressUseCode = {
  /**
   * _GeneralAddressUse
   */
  _GeneralAddressUse: "_GeneralAddressUse",

  /**
   * bad address
   */
  badaddress: "BAD",

  /**
   * confidential address
   */
  confidentialaddress: "CONF",

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
   * no longer in use
   */
  nolongerinuse: "OLD",

  /**
   * temporary address
   */
  temporaryaddress: "TMP",

  /**
   * work place
   */
  workplace: "WP",

  /**
   * direct
   */
  direct: "DIR",

  /**
   * public
   */
  public: "PUB",

  /**
   * _PostalAddressUse
   */
  _PostalAddressUse: "_PostalAddressUse",

  /**
   * physical visit address
   */
  physicalvisitaddress: "PHYS",

  /**
   * postal address
   */
  postaladdress: "PST",

  /**
   * _TelecommunicationAddressUse
   */
  _TelecommunicationAddressUse: "_TelecommunicationAddressUse",

  /**
   * answering service
   */
  answeringservice: "AS",

  /**
   * emergency contact
   */
  emergencycontact: "EC",

  /**
   * mobile contact)
   */
  mobilecontact: "MC",

  /**
   * pager
   */
  pager: "PG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AddressUseCode = typeof AddressUseCode[keyof typeof AddressUseCode];
