/**
 * Concepts  for specifying a type of telecommunication equipment.
 * http://terminology.hl7.org/ValueSet/v2-0202
 */
export const Hl7VSTelecommunicationEquipmentTypeCode = {
  /**
   * Telephone
   */
  PH: "PH",

  /**
   * Fax
   */
  FX: "FX",

  /**
   * Modem
   */
  MD: "MD",

  /**
   * Cellular or Mobile Phone
   */
  CP: "CP",

  /**
   * Satellite Phone
   */
  SAT: "SAT",

  /**
   * Beeper
   */
  BP: "BP",

  /**
   * Internet Address
   */
  Internet: "Internet",

  /**
   * X.400 email address
   */
  "X.400": "X.400",

  /**
   * Telecommunications Device for the Deaf
   */
  TDD: "TDD",

  /**
   * Teletypewriter
   */
  TTY: "TTY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTelecommunicationEquipmentTypeCode =
  typeof Hl7VSTelecommunicationEquipmentTypeCode[keyof typeof Hl7VSTelecommunicationEquipmentTypeCode];
