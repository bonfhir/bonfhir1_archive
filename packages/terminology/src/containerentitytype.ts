/**
 * Material intended to hold another material for purpose of storage or transport.
 * http://terminology.hl7.org/ValueSet/v3-ContainerEntityType
 */
export const ContainerEntityTypeCode = {
  /**
   * Package
   */
  PKG: "PKG",

  /**
   * NonRigidContainerEntityType
   */
  _NonRigidContainerEntityType: "_NonRigidContainerEntityType",

  /**
   * Bag
   */
  BAG: "BAG",

  /**
   * Packet
   */
  PACKT: "PACKT",

  /**
   * Pouch
   */
  PCH: "PCH",

  /**
   * Sachet
   */
  SACH: "SACH",

  /**
   * RigidContainerEntityType
   */
  _RigidContainerEntityType: "_RigidContainerEntityType",

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

  /**
   * Compliance Package
   */
  COMPPKG: "COMPPKG",

  /**
   * Dial Pack
   */
  DIALPK: "DIALPK",

  /**
   * Disk
   */
  DISK: "DISK",

  /**
   * Dosette
   */
  DOSET: "DOSET",

  /**
   * Strip
   */
  STRIP: "STRIP",

  /**
   * Kit
   */
  KIT: "KIT",

  /**
   * System
   */
  SYSTM: "SYSTM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContainerEntityTypeCode =
  typeof ContainerEntityTypeCode[keyof typeof ContainerEntityTypeCode];
