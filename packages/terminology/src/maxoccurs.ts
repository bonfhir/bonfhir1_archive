/**
 * Flags an element as having unlimited repetitions.
 * http://terminology.hl7.org/ValueSet/question-max-occurs
 */
export const MaxOccursCode = {
  /**
   * Repeating
   */
  Repeating: "*",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MaxOccursCode = typeof MaxOccursCode[keyof typeof MaxOccursCode];
