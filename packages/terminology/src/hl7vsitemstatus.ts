/**
 * Value Set of codes that specify the status (useful for reporting and item usage purposes) that applies to an item.
 * http://terminology.hl7.org/ValueSet/v2-0776
 */
export const Hl7VSItemStatusCode = {
  /**
   * Active
   */
  Active: "A",

  /**
   * Pending Inactive
   */
  PendingInactive: "P",

  /**
   * Inactive
   */
  Inactive: "I",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSItemStatusCode =
  typeof Hl7VSItemStatusCode[keyof typeof Hl7VSItemStatusCode];
