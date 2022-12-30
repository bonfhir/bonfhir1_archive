/**
 * Value Set of codes that specify the clinical complexity level (CCL) value for the determined diagnosis related group (DRG) for this diagnosis.
 * http://terminology.hl7.org/ValueSet/v2-0728
 */
export const Hl7VSCclValueCode = {
  /**
   * Nothing obvious
   */
  "0": "0",

  /**
   * Low
   */
  "1": "1",

  /**
   * Moderate
   */
  "2": "2",

  /**
   * High
   */
  "3": "3",

  /**
   * Very high
   */
  "4": "4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCclValueCode =
  typeof Hl7VSCclValueCode[keyof typeof Hl7VSCclValueCode];
