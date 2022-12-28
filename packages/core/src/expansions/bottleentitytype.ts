/**
 * A container, typically rounded, either glass or plastic with a narrow neck and capable of storing liquid.
 * http://terminology.hl7.org/ValueSet/v3-BottleEntityType
 */
export const BottleEntityTypeCode = {
  /**
   * Bottle
   */
  BOT: "BOT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BottleEntityTypeCode =
  typeof BottleEntityTypeCode[keyof typeof BottleEntityTypeCode];
