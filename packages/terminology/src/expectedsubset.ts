/**
 * An occurrence that is scheduled to occur in the future. An Act whose effective time is greater than 'now', where 'now' is the time the instance is authored.
 * http://terminology.hl7.org/ValueSet/v3-ExpectedSubset
 */
export const ExpectedSubsetCode = {
  /**
   * expected future
   */
  FUTURE: "FUTURE",

  /**
   * future summary
   */
  FUTSUM: "FUTSUM",

  /**
   * expected last
   */
  LAST: "LAST",

  /**
   * expected next
   */
  NEXT: "NEXT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExpectedSubsetCode =
  typeof ExpectedSubsetCode[keyof typeof ExpectedSubsetCode];
