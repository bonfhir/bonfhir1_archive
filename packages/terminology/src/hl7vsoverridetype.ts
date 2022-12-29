/**
 * Value Set of codes that specify what type of override can be used to override the specific error identified.
 * http://terminology.hl7.org/ValueSet/v2-0518
 */
export const Hl7VSOverrideTypeCode = {
  /**
   * Extension Override
   */
  ExtensionOverride: "EXTN",

  /**
   * Interval Override
   */
  IntervalOverride: "INLV",

  /**
   * Equivalence Override
   */
  EquivalenceOverride: "EQV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSOverrideTypeCode =
  typeof Hl7VSOverrideTypeCode[keyof typeof Hl7VSOverrideTypeCode];
