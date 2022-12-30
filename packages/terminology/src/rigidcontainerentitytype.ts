/**
 * A container having a fixed and inflexible dimensions and volume
 * http://terminology.hl7.org/ValueSet/v3-RigidContainerEntityType
 */
export const RigidContainerEntityTypeCode = {
  /**
   * IndividualPackageEntityType
   */
  _IndividualPackageEntityType: "_IndividualPackageEntityType",

  /**
   * Ampule
   */
  AMP: "AMP",

  /**
   * Minim
   */
  MINIM: "MINIM",

  /**
   * Nebuamp
   */
  NEBAMP: "NEBAMP",

  /**
   * Ovule
   */
  OVUL: "OVUL",

  /**
   * MultiUseContainerEntityType
   */
  _MultiUseContainerEntityType: "_MultiUseContainerEntityType",

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

  /**
   * Blister Pack
   */
  BLSTRPK: "BLSTRPK",

  /**
   * Card
   */
  CARD: "CARD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RigidContainerEntityTypeCode =
  typeof RigidContainerEntityTypeCode[keyof typeof RigidContainerEntityTypeCode];
