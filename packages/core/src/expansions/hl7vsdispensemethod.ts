/**
 * Value Set of codes that specify the method by which treatment is dispensed.
 * http://terminology.hl7.org/ValueSet/v2-0321
 */
export const Hl7VSDispenseMethodCode = {
  /**
   * Traditional
   */
  TR: "TR",

  /**
   * Unit Dose
   */
  UD: "UD",

  /**
   * Floor Stock
   */
  F: "F",

  /**
   * Automatic Dispensing
   */
  AD: "AD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDispenseMethodCode =
  typeof Hl7VSDispenseMethodCode[keyof typeof Hl7VSDispenseMethodCode];
