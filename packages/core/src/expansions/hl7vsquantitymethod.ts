/**
 * Value Set of codes that specify the method by which the quantity distributed is measured.
 * http://terminology.hl7.org/ValueSet/v2-0329
 */
export const Hl7VSQuantityMethodCode = {
  /**
   * Actual count
   */
  A: "A",

  /**
   * Estimated (see comment)
   */
  E: "E",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSQuantityMethodCode =
  typeof Hl7VSQuantityMethodCode[keyof typeof Hl7VSQuantityMethodCode];
