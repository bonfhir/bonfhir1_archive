/**
 * Value Set of codes specifying the side of the body ("left" or "right").
 * http://terminology.hl7.org/ValueSet/v2-0894
 */
export const Hl7VSSideOfBodyCode = {
  /**
   * Left
   */
  Left: "L",

  /**
   * Right
   */
  Right: "R",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSideOfBodyCode =
  typeof Hl7VSSideOfBodyCode[keyof typeof Hl7VSSideOfBodyCode];
