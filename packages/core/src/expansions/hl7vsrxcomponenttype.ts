/**
 * Value Set of codes that specify the RX component type.
 * http://terminology.hl7.org/ValueSet/v2-0166
 */
export const Hl7VSRxComponentTypeCode = {
  /**
   * Base
   */
  B: "B",

  /**
   * Additive
   */
  A: "A",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRxComponentTypeCode =
  typeof Hl7VSRxComponentTypeCode[keyof typeof Hl7VSRxComponentTypeCode];
