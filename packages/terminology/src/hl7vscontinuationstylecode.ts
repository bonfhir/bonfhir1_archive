/**
 * Value Set of codes identifying whether it is a fragmented message or part of an interactive continuation message.
 * http://terminology.hl7.org/ValueSet/v2-0398
 */
export const Hl7VSContinuationStyleCodeCode = {
  /**
   * Fragmentation
   */
  Fragmentation: "F",

  /**
   * Interactive Continuation
   */
  InteractiveContinuation: "I",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSContinuationStyleCodeCode =
  typeof Hl7VSContinuationStyleCodeCode[keyof typeof Hl7VSContinuationStyleCodeCode];
