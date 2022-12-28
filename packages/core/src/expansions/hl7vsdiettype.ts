/**
 * Value Set of codes that specify the type of diet.
 * http://terminology.hl7.org/ValueSet/v2-0159
 */
export const Hl7VSDietTypeCode = {
  /**
   * Diet
   */
  D: "D",

  /**
   * Supplement
   */
  S: "S",

  /**
   * Preference
   */
  P: "P",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDietTypeCode =
  typeof Hl7VSDietTypeCode[keyof typeof Hl7VSDietTypeCode];
