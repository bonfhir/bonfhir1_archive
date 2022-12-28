/**
 * Value Set of codes that identify whether sequence conditions or a repeating cycle of orders is defined, as part of the Order Sequence Definition.
 * http://terminology.hl7.org/ValueSet/v2-0524
 */
export const Hl7VSSequenceConditionCode = {
  /**
   * Sequence conditions
   */
  S: "S",

  /**
   * Repeating cycle of orders
   */
  C: "C",

  /**
   * Reserved for possible future use
   */
  R: "R",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSequenceConditionCode =
  typeof Hl7VSSequenceConditionCode[keyof typeof Hl7VSSequenceConditionCode];
