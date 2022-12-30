/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-GeneralAddressUse
 */
export const GeneralAddressUseCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GeneralAddressUseCode =
  typeof GeneralAddressUseCode[keyof typeof GeneralAddressUseCode];
