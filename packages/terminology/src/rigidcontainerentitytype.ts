/**
 * A container having a fixed and inflexible dimensions and volume
 * http://terminology.hl7.org/ValueSet/v3-RigidContainerEntityType
 */
export const RigidContainerEntityTypeCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RigidContainerEntityTypeCode =
  typeof RigidContainerEntityTypeCode[keyof typeof RigidContainerEntityTypeCode];
