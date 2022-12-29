/**
 * A container intended to contain sufficient material for more than one use. (I.e. Material is intended to be removed from the container at more than one discrete time period.)
 * http://terminology.hl7.org/ValueSet/v3-MultiUseContainerEntityType
 */
export const MultiUseContainerEntityTypeCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MultiUseContainerEntityTypeCode =
  typeof MultiUseContainerEntityTypeCode[keyof typeof MultiUseContainerEntityTypeCode];
