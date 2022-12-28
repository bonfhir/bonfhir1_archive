/**
 * An occurrence that occurred or was scheduled to occur in the past. An Act whose effective time is less than 'now'. ('now' is the time the instance is authored.)
 * http://terminology.hl7.org/ValueSet/v3-PastSubset
 */
export const PastSubsetCode = {
  /**
   * previous
   */
  PAST: "PAST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PastSubsetCode = typeof PastSubsetCode[keyof typeof PastSubsetCode];
