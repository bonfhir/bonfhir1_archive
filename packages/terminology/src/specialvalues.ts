/**
 * A set of generally useful codes defined so they can be included in value sets.
 * http://terminology.hl7.org/ValueSet/special-values
 */
export const SpecialValuesCode = {
  /**
   * true
   */
  true: "true",

  /**
   * false
   */
  false: "false",

  /**
   * Trace Amount Detected
   */
  TraceAmountDetected: "trace",

  /**
   * Sufficient Quantity
   */
  SufficientQuantity: "sufficient",

  /**
   * Value Withdrawn
   */
  ValueWithdrawn: "withdrawn",

  /**
   * Nil Known
   */
  NilKnown: "nil-known",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SpecialValuesCode =
  typeof SpecialValuesCode[keyof typeof SpecialValuesCode];
