/**
 * Flush
 * http://terminology.hl7.org/ValueSet/v3-Flush
 */
export const FlushCode = {
  /**
   * Flush, intravenous catheter
   */
  Flushintravenouscatheter: "IVFLUSH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FlushCode = typeof FlushCode[keyof typeof FlushCode];
