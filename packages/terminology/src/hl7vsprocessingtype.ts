/**
 * Value Set of codes identifying the processing type that applies to the test code.  If this attribute is omitted, then regular production is the default.
 * http://terminology.hl7.org/ValueSet/v2-0388
 */
export const Hl7VSProcessingTypeCode = {
  /**
   * Regular Production
   */
  RegularProduction: "P",

  /**
   * Evaluation
   */
  Evaluation: "E",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProcessingTypeCode =
  typeof Hl7VSProcessingTypeCode[keyof typeof Hl7VSProcessingTypeCode];
