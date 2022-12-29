/**
 * Value Set of codes that define whether a Charge Description Master description may be overridden or if it must be overridden.
 * http://terminology.hl7.org/ValueSet/v2-0268
 */
export const Hl7VSOverrideCode = {
  /**
   * Override not allowed
   */
  Overridenotallowed: "X",

  /**
   * Override allowed
   */
  Overrideallowed: "A",

  /**
   * Override required
   */
  Overriderequired: "R",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSOverrideCode =
  typeof Hl7VSOverrideCode[keyof typeof Hl7VSOverrideCode];
