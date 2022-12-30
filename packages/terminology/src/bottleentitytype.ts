/**
 * A container, typically rounded, either glass or plastic with a narrow neck and capable of storing liquid.
 * http://terminology.hl7.org/ValueSet/v3-BottleEntityType
 */
export const BottleEntityTypeCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BottleEntityTypeCode =
  typeof BottleEntityTypeCode[keyof typeof BottleEntityTypeCode];
