/**
 * Concepts specifying types or kinds of addresses.
 * http://terminology.hl7.org/ValueSet/v2-0190
 */
export const Hl7VSAddressTypeCode = {
  /**
   * Bad address
   */
  BA: "BA",

  /**
   * Billing Address
   */
  BI: "BI",

  /**
   * Birth (nee)  (birth address, not otherwise specified)
   */
  N: "N",

  /**
   * Birth delivery location  (address where birth occurred)
   */
  BDL: "BDL",

  /**
   * Country Of Origin
   */
  F: "F",

  /**
   * Current Or Temporary
   */
  C: "C",

  /**
   * Firm/Business
   */
  B: "B",

  /**
   * Home
   */
  H: "H",

  /**
   * Legal Address
   */
  L: "L",

  /**
   * Mailing
   */
  M: "M",

  /**
   * Office/Business
   */
  O: "O",

  /**
   * Permanent
   */
  P: "P",

  /**
   * Registry home. Refers to the information system, typically managed by a public health agency, that stores patient information such as immunization histories or cancer data, regardless of where the patient obtains services.
   */
  RH: "RH",

  /**
   * Residence at birth (home address at time of birth)
   */
  BR: "BR",

  /**
   * Service Location
   */
  S: "S",

  /**
   * Shipping Address
   */
  SH: "SH",

  /**
   * Tube Address
   */
  TM: "TM",

  /**
   * Vacation
   */
  V: "V",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAddressTypeCode =
  typeof Hl7VSAddressTypeCode[keyof typeof Hl7VSAddressTypeCode];
