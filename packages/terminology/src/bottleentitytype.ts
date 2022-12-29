/**
 * A container, typically rounded, either glass or plastic with a narrow neck and capable of storing liquid.
 * http://terminology.hl7.org/ValueSet/v3-BottleEntityType
 */
export const BottleEntityTypeCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BottleEntityTypeCode =
  typeof BottleEntityTypeCode[keyof typeof BottleEntityTypeCode];
