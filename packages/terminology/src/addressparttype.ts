/**
 * Discussion: The hierarchical nature of these concepts shows composition. E.g. "Street Name" is part of "Street Address Line"
 * http://terminology.hl7.org/ValueSet/v3-AddressPartType
 */
export const AddressPartTypeCode = {
  /**
   * additional locator
   */
  ADL: "ADL",

  /**
   * address line
   */
  AL: "AL",

  /**
   * delivery address line
   */
  DAL: "DAL",

  /**
   * street address line
   */
  SAL: "SAL",

  /**
   * building number numeric
   */
  BNN: "BNN",

  /**
   * building number
   */
  BNR: "BNR",

  /**
   * building number suffix
   */
  BNS: "BNS",

  /**
   * care of
   */
  CAR: "CAR",

  /**
   * census tract
   */
  CEN: "CEN",

  /**
   * country
   */
  CNT: "CNT",

  /**
   * county or parish
   */
  CPA: "CPA",

  /**
   * municipality
   */
  CTY: "CTY",

  /**
   * delimiter
   */
  DEL: "DEL",

  /**
   * delivery installation type
   */
  DINST: "DINST",

  /**
   * delivery installation area
   */
  DINSTA: "DINSTA",

  /**
   * delivery installation qualifier
   */
  DINSTQ: "DINSTQ",

  /**
   * direction
   */
  DIR: "DIR",

  /**
   * delivery mode
   */
  DMOD: "DMOD",

  /**
   * delivery mode identifier
   */
  DMODID: "DMODID",

  /**
   * delivery point identifier
   */
  DPID: "DPID",

  /**
   * intersection
   */
  INT: "INT",

  /**
   * post box
   */
  POB: "POB",

  /**
   * precinct
   */
  PRE: "PRE",

  /**
   * state or province
   */
  STA: "STA",

  /**
   * street name base
   */
  STB: "STB",

  /**
   * street name
   */
  STR: "STR",

  /**
   * street type
   */
  STTYP: "STTYP",

  /**
   * unit identifier
   */
  UNID: "UNID",

  /**
   * unit designator
   */
  UNIT: "UNIT",

  /**
   * postal code
   */
  ZIP: "ZIP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AddressPartTypeCode =
  typeof AddressPartTypeCode[keyof typeof AddressPartTypeCode];
