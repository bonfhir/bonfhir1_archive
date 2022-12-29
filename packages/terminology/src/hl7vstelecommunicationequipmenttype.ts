/**
 * Concepts  for specifying a type of telecommunication equipment.
 * http://terminology.hl7.org/ValueSet/v2-0202
 */
export const Hl7VSTelecommunicationEquipmentTypeCode = {
  /**
   * Telephone
   */
  Telephone: "PH",

  /**
   * Fax
   */
  Fax: "FX",

  /**
   * Modem
   */
  Modem: "MD",

  /**
   * Cellular or Mobile Phone
   */
  CellularorMobilePhone: "CP",

  /**
   * Satellite Phone
   */
  SatellitePhone: "SAT",

  /**
   * Beeper
   */
  Beeper: "BP",

  /**
   * Internet Address
   */
  InternetAddress: "Internet",

  /**
   * X.400 email address
   */
  X400emailaddress: "X.400",

  /**
   * Telecommunications Device for the Deaf
   */
  TelecommunicationsDevicefortheDeaf: "TDD",

  /**
   * Teletypewriter
   */
  Teletypewriter: "TTY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTelecommunicationEquipmentTypeCode =
  typeof Hl7VSTelecommunicationEquipmentTypeCode[keyof typeof Hl7VSTelecommunicationEquipmentTypeCode];
