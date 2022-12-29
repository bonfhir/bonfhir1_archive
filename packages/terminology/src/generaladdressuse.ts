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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GeneralAddressUseCode =
  typeof GeneralAddressUseCode[keyof typeof GeneralAddressUseCode];
