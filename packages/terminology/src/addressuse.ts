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
  BAD: "BAD",

  /**
   * confidential address
   */
  CONF: "CONF",

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
   * no longer in use
   */
  OLD: "OLD",

  /**
   * temporary address
   */
  TMP: "TMP",

  /**
   * work place
   */
  WP: "WP",

  /**
   * direct
   */
  DIR: "DIR",

  /**
   * public
   */
  PUB: "PUB",

  /**
   * _PostalAddressUse
   */
  _PostalAddressUse: "_PostalAddressUse",

  /**
   * physical visit address
   */
  PHYS: "PHYS",

  /**
   * postal address
   */
  PST: "PST",

  /**
   * _TelecommunicationAddressUse
   */
  _TelecommunicationAddressUse: "_TelecommunicationAddressUse",

  /**
   * answering service
   */
  AS: "AS",

  /**
   * emergency contact
   */
  EC: "EC",

  /**
   * mobile contact)
   */
  MC: "MC",

  /**
   * pager
   */
  PG: "PG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AddressUseCode = typeof AddressUseCode[keyof typeof AddressUseCode];
