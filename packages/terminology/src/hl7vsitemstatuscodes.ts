/**
 * Value Set of codes that specify the state of an inventory item within the context of an inventory location.
 * http://terminology.hl7.org/ValueSet/v2-0625
 */
export const Hl7VSItemStatusCodesCode = {
  /**
   * Active
   */
  Active: "1",

  /**
   * Pending Inactive
   */
  PendingInactive: "2",

  /**
   * Inactive
   */
  Inactive: "3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSItemStatusCodesCode =
  typeof Hl7VSItemStatusCodesCode[keyof typeof Hl7VSItemStatusCodesCode];
