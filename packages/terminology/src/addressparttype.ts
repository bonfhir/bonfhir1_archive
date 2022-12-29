/**
 * Discussion: The hierarchical nature of these concepts shows composition. E.g. "Street Name" is part of "Street Address Line"
 * http://terminology.hl7.org/ValueSet/v3-AddressPartType
 */
export const AddressPartTypeCode = {
  /**
   * additional locator
   */
  additionallocator: "ADL",

  /**
   * address line
   */
  addressline: "AL",

  /**
   * delivery address line
   */
  deliveryaddressline: "DAL",

  /**
   * street address line
   */
  streetaddressline: "SAL",

  /**
   * building number numeric
   */
  buildingnumbernumeric: "BNN",

  /**
   * building number
   */
  buildingnumber: "BNR",

  /**
   * building number suffix
   */
  buildingnumbersuffix: "BNS",

  /**
   * care of
   */
  careof: "CAR",

  /**
   * census tract
   */
  censustract: "CEN",

  /**
   * country
   */
  country: "CNT",

  /**
   * county or parish
   */
  countyorparish: "CPA",

  /**
   * municipality
   */
  municipality: "CTY",

  /**
   * delimiter
   */
  delimiter: "DEL",

  /**
   * delivery installation type
   */
  deliveryinstallationtype: "DINST",

  /**
   * delivery installation area
   */
  deliveryinstallationarea: "DINSTA",

  /**
   * delivery installation qualifier
   */
  deliveryinstallationqualifier: "DINSTQ",

  /**
   * direction
   */
  direction: "DIR",

  /**
   * delivery mode
   */
  deliverymode: "DMOD",

  /**
   * delivery mode identifier
   */
  deliverymodeidentifier: "DMODID",

  /**
   * delivery point identifier
   */
  deliverypointidentifier: "DPID",

  /**
   * intersection
   */
  intersection: "INT",

  /**
   * post box
   */
  postbox: "POB",

  /**
   * precinct
   */
  precinct: "PRE",

  /**
   * state or province
   */
  stateorprovince: "STA",

  /**
   * street name base
   */
  streetnamebase: "STB",

  /**
   * street name
   */
  streetname: "STR",

  /**
   * street type
   */
  streettype: "STTYP",

  /**
   * unit identifier
   */
  unitidentifier: "UNID",

  /**
   * unit designator
   */
  unitdesignator: "UNIT",

  /**
   * postal code
   */
  postalcode: "ZIP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AddressPartTypeCode =
  typeof AddressPartTypeCode[keyof typeof AddressPartTypeCode];
