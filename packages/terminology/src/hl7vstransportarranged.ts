/**
 * Value Set of codes defining whether patient transportation preparations are in place.
 * http://terminology.hl7.org/ValueSet/v2-0224
 */
export const Hl7VSTransportArrangedCode = {
  /**
   * Arranged
   */
  Arranged: "A",

  /**
   * Not Arranged
   */
  NotArranged: "N",

  /**
   * Unknown
   */
  Unknown: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTransportArrangedCode =
  typeof Hl7VSTransportArrangedCode[keyof typeof Hl7VSTransportArrangedCode];
