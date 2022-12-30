/**
 * Value Set of codes specifying a type of bolus.
 * http://terminology.hl7.org/ValueSet/v2-0917
 */
export const Hl7VSBolusTypeCode = {
  /**
   * Supplemental
   */
  C: "C",

  /**
   * Loading
   */
  L: "L",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSBolusTypeCode =
  typeof Hl7VSBolusTypeCode[keyof typeof Hl7VSBolusTypeCode];
