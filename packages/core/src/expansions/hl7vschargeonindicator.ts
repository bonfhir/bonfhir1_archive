/**
 * Value Set of codes that define the event upon which a charge should be generated.
 * http://terminology.hl7.org/ValueSet/v2-0269
 */
export const Hl7VSChargeOnIndicatorCode = {
  /**
   * Charge on Order
   */
  O: "O",

  /**
   * Charge on Result
   */
  R: "R",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSChargeOnIndicatorCode =
  typeof Hl7VSChargeOnIndicatorCode[keyof typeof Hl7VSChargeOnIndicatorCode];
