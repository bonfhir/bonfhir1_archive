/**
 * Indicates whether the subscription to a query is new or is being modified.
 * http://terminology.hl7.org/ValueSet/v3-ModifyIndicator
 */
export const ModifyIndicatorCode = {
  /**
   * Modified subscription
   */
  Modifiedsubscription: "M",

  /**
   * New subscription
   */
  Newsubscription: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ModifyIndicatorCode =
  typeof ModifyIndicatorCode[keyof typeof ModifyIndicatorCode];
