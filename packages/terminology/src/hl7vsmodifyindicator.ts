/**
 * Value Set of codes identifying whether the subscription is new or is being modified.
 * http://terminology.hl7.org/ValueSet/v2-0395
 */
export const Hl7VSModifyIndicatorCode = {
  /**
   * New Subscription
   */
  NewSubscription: "N",

  /**
   * Modified Subscription
   */
  ModifiedSubscription: "M",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSModifyIndicatorCode =
  typeof Hl7VSModifyIndicatorCode[keyof typeof Hl7VSModifyIndicatorCode];
