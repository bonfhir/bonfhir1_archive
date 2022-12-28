/**
 * MedicationKnowledge Package Type Codes
 * http://terminology.hl7.org/ValueSet/medicationknowledge-package-type
 */
export const MedicationKnowledgePackageTypeCodesCode = {
  /**
   * Ampule
   */
  amp: "amp",

  /**
   * Bag
   */
  bag: "bag",

  /**
   * Blister Pack
   */
  blstrpk: "blstrpk",

  /**
   * Bottle
   */
  bot: "bot",

  /**
   * Box
   */
  box: "box",

  /**
   * Can
   */
  can: "can",

  /**
   * Cartridge
   */
  cart: "cart",

  /**
   * Disk
   */
  disk: "disk",

  /**
   * Dosette
   */
  doset: "doset",

  /**
   * Jar
   */
  jar: "jar",

  /**
   * Jug
   */
  jug: "jug",

  /**
   * Minim
   */
  minim: "minim",

  /**
   * Nebule Amp
   */
  nebamp: "nebamp",

  /**
   * Ovule
   */
  ovul: "ovul",

  /**
   * Pouch
   */
  pch: "pch",

  /**
   * Packet
   */
  pkt: "pkt",

  /**
   * Sashet
   */
  sash: "sash",

  /**
   * Strip
   */
  strip: "strip",

  /**
   * Tin
   */
  tin: "tin",

  /**
   * Tub
   */
  tub: "tub",

  /**
   * Tube
   */
  tube: "tube",

  /**
   * Vial
   */
  vial: "vial",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationKnowledgePackageTypeCodesCode =
  typeof MedicationKnowledgePackageTypeCodesCode[keyof typeof MedicationKnowledgePackageTypeCodesCode];
