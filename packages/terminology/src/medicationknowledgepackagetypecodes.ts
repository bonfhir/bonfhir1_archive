/**
 * MedicationKnowledge Package Type Codes
 * http://terminology.hl7.org/ValueSet/medicationknowledge-package-type
 */
export const MedicationKnowledgePackageTypeCodesCode = {
  /**
   * Ampule
   */
  Ampule: "amp",

  /**
   * Bag
   */
  Bag: "bag",

  /**
   * Blister Pack
   */
  BlisterPack: "blstrpk",

  /**
   * Bottle
   */
  Bottle: "bot",

  /**
   * Box
   */
  Box: "box",

  /**
   * Can
   */
  Can: "can",

  /**
   * Cartridge
   */
  Cartridge: "cart",

  /**
   * Disk
   */
  Disk: "disk",

  /**
   * Dosette
   */
  Dosette: "doset",

  /**
   * Jar
   */
  Jar: "jar",

  /**
   * Jug
   */
  Jug: "jug",

  /**
   * Minim
   */
  Minim: "minim",

  /**
   * Nebule Amp
   */
  NebuleAmp: "nebamp",

  /**
   * Ovule
   */
  Ovule: "ovul",

  /**
   * Pouch
   */
  Pouch: "pch",

  /**
   * Packet
   */
  Packet: "pkt",

  /**
   * Sashet
   */
  Sashet: "sash",

  /**
   * Strip
   */
  Strip: "strip",

  /**
   * Tin
   */
  Tin: "tin",

  /**
   * Tub
   */
  Tub: "tub",

  /**
   * Tube
   */
  Tube: "tube",

  /**
   * Vial
   */
  Vial: "vial",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationKnowledgePackageTypeCodesCode =
  typeof MedicationKnowledgePackageTypeCodesCode[keyof typeof MedicationKnowledgePackageTypeCodesCode];
