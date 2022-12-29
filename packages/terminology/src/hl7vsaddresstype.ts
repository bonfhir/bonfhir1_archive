/**
 * Concepts specifying types or kinds of addresses.
 * http://terminology.hl7.org/ValueSet/v2-0190
 */
export const Hl7VSAddressTypeCode = {
  /**
   * Bad address
   */
  Badaddress: "BA",

  /**
   * Billing Address
   */
  BillingAddress: "BI",

  /**
   * Birth (nee)  (birth address, not otherwise specified)
   */
  Birthneebirthaddressnototherwisespecified: "N",

  /**
   * Birth delivery location  (address where birth occurred)
   */
  Birthdeliverylocationaddresswherebirthoccurred: "BDL",

  /**
   * Country Of Origin
   */
  CountryOfOrigin: "F",

  /**
   * Current Or Temporary
   */
  CurrentOrTemporary: "C",

  /**
   * Firm/Business
   */
  FirmBusiness: "B",

  /**
   * Home
   */
  Home: "H",

  /**
   * Legal Address
   */
  LegalAddress: "L",

  /**
   * Mailing
   */
  Mailing: "M",

  /**
   * Office/Business
   */
  OfficeBusiness: "O",

  /**
   * Permanent
   */
  Permanent: "P",

  /**
   * Registry home. Refers to the information system, typically managed by a public health agency, that stores patient information such as immunization histories or cancer data, regardless of where the patient obtains services.
   */
  RegistryhomeReferstotheinformationsystemtypicallymanagedbyapublichealthagencythatstorespatientinformationsuchasimmunizationhistoriesorcancerdataregardlessofwherethepatientobtainsservices:
    "RH",

  /**
   * Residence at birth (home address at time of birth)
   */
  Residenceatbirthhomeaddressattimeofbirth: "BR",

  /**
   * Service Location
   */
  ServiceLocation: "S",

  /**
   * Shipping Address
   */
  ShippingAddress: "SH",

  /**
   * Tube Address
   */
  TubeAddress: "TM",

  /**
   * Vacation
   */
  Vacation: "V",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAddressTypeCode =
  typeof Hl7VSAddressTypeCode[keyof typeof Hl7VSAddressTypeCode];
