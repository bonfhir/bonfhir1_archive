/**
 * A container intended to contain sufficient material for more than one use. (I.e. Material is intended to be removed from the container at more than one discrete time period.)
 * http://terminology.hl7.org/ValueSet/v3-MultiUseContainerEntityType
 */
export const MultiUseContainerEntityTypeCode = {
  /**
   * Bottle
   */
  BOT: "BOT",

  /**
   * Amber Bottle
   */
  BOTA: "BOTA",

  /**
   * Dropper Bottle
   */
  BOTD: "BOTD",

  /**
   * Glass Bottle
   */
  BOTG: "BOTG",

  /**
   * Plastic Bottle
   */
  BOTP: "BOTP",

  /**
   * Polyethylene Bottle
   */
  BOTPLY: "BOTPLY",

  /**
   * Box
   */
  BOX: "BOX",

  /**
   * Can
   */
  CAN: "CAN",

  /**
   * Cartridge
   */
  CART: "CART",

  /**
   * Canister
   */
  CNSTR: "CNSTR",

  /**
   * Jar
   */
  JAR: "JAR",

  /**
   * Jug
   */
  JUG: "JUG",

  /**
   * Tin
   */
  TIN: "TIN",

  /**
   * Tub
   */
  TUB: "TUB",

  /**
   * Tube
   */
  TUBE: "TUBE",

  /**
   * Vial
   */
  VIAL: "VIAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MultiUseContainerEntityTypeCode =
  typeof MultiUseContainerEntityTypeCode[keyof typeof MultiUseContainerEntityTypeCode];
