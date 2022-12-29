/**
 * A material intended to hold other materials for purposes of storage or transportation
 * http://terminology.hl7.org/ValueSet/v3-PackageEntityType
 */
export const PackageEntityTypeCode = {
  /**
   * Package
   */
  Package: "PKG",

  /**
   * NonRigidContainerEntityType
   */
  NonRigidContainerEntityType: "_NonRigidContainerEntityType",

  /**
   * Bag
   */
  Bag: "BAG",

  /**
   * Packet
   */
  Packet: "PACKT",

  /**
   * Pouch
   */
  Pouch: "PCH",

  /**
   * Sachet
   */
  Sachet: "SACH",

  /**
   * RigidContainerEntityType
   */
  RigidContainerEntityType: "_RigidContainerEntityType",

  /**
   * IndividualPackageEntityType
   */
  IndividualPackageEntityType: "_IndividualPackageEntityType",

  /**
   * Ampule
   */
  Ampule: "AMP",

  /**
   * Minim
   */
  Minim: "MINIM",

  /**
   * Nebuamp
   */
  Nebuamp: "NEBAMP",

  /**
   * Ovule
   */
  Ovule: "OVUL",

  /**
   * MultiUseContainerEntityType
   */
  MultiUseContainerEntityType: "_MultiUseContainerEntityType",

  /**
   * Bottle
   */
  Bottle: "BOT",

  /**
   * Amber Bottle
   */
  AmberBottle: "BOTA",

  /**
   * Dropper Bottle
   */
  DropperBottle: "BOTD",

  /**
   * Glass Bottle
   */
  GlassBottle: "BOTG",

  /**
   * Plastic Bottle
   */
  PlasticBottle: "BOTP",

  /**
   * Polyethylene Bottle
   */
  PolyethyleneBottle: "BOTPLY",

  /**
   * Box
   */
  Box: "BOX",

  /**
   * Can
   */
  Can: "CAN",

  /**
   * Cartridge
   */
  Cartridge: "CART",

  /**
   * Canister
   */
  Canister: "CNSTR",

  /**
   * Jar
   */
  Jar: "JAR",

  /**
   * Jug
   */
  Jug: "JUG",

  /**
   * Tin
   */
  Tin: "TIN",

  /**
   * Tub
   */
  Tub: "TUB",

  /**
   * Tube
   */
  Tube: "TUBE",

  /**
   * Vial
   */
  Vial: "VIAL",

  /**
   * Blister Pack
   */
  BlisterPack: "BLSTRPK",

  /**
   * Card
   */
  Card: "CARD",

  /**
   * Compliance Package
   */
  CompliancePackage: "COMPPKG",

  /**
   * Dial Pack
   */
  DialPack: "DIALPK",

  /**
   * Disk
   */
  Disk: "DISK",

  /**
   * Dosette
   */
  Dosette: "DOSET",

  /**
   * Strip
   */
  Strip: "STRIP",

  /**
   * Kit
   */
  Kit: "KIT",

  /**
   * System
   */
  System: "SYSTM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PackageEntityTypeCode =
  typeof PackageEntityTypeCode[keyof typeof PackageEntityTypeCode];
