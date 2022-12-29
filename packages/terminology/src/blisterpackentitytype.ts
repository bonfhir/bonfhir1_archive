/**
 * A bubblepack. Medications sealed individually, separated into doses.
 * http://terminology.hl7.org/ValueSet/v3-BlisterPackEntityType
 */
export const BlisterPackEntityTypeCode = {
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
export type BlisterPackEntityTypeCode =
  typeof BlisterPackEntityTypeCode[keyof typeof BlisterPackEntityTypeCode];
