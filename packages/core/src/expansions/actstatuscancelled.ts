/**
 * The Act has been abandoned before activation.
 * http://terminology.hl7.org/ValueSet/v3-ActStatusCancelled
 */
export const ActStatusCancelledCode = {
  /**
   * cancelled
   */
  cancelled: "cancelled",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActStatusCancelledCode =
  typeof ActStatusCancelledCode[keyof typeof ActStatusCancelledCode];
