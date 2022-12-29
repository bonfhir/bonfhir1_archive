/**
 * Indicates why a fulfiller refused to fulfill a supply order, and considered it important to notify other providers of their decision. E.g. "Suspect fraud", "Possible abuse", "Contraindicated".

(used when capturing 'refusal to fill' annotations)
 * http://terminology.hl7.org/ValueSet/v3-ActSupplyFulfillmentRefusalReason
 */
export const ActSupplyFulfillmentRefusalReasonCode = {
  /**
   * ActSupplyFulfillmentRefusalReason
   */
  ActSupplyFulfillmentRefusalReason: "_ActSupplyFulfillmentRefusalReason",

  /**
   * order stopped
   */
  orderstopped: "FRR01",

  /**
   * stale-dated order
   */
  staledatedorder: "FRR02",

  /**
   * incomplete data
   */
  incompletedata: "FRR03",

  /**
   * product unavailable
   */
  productunavailable: "FRR04",

  /**
   * ethical/religious
   */
  ethicalreligious: "FRR05",

  /**
   * unable to provide care
   */
  unabletoprovidecare: "FRR06",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActSupplyFulfillmentRefusalReasonCode =
  typeof ActSupplyFulfillmentRefusalReasonCode[keyof typeof ActSupplyFulfillmentRefusalReasonCode];
