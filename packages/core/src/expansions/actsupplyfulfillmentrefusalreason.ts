/**
 * Indicates why a fulfiller refused to fulfill a supply order, and considered it important to notify other providers of their decision. E.g. "Suspect fraud", "Possible abuse", "Contraindicated".

(used when capturing 'refusal to fill' annotations)
 * http://terminology.hl7.org/ValueSet/v3-ActSupplyFulfillmentRefusalReason
 */
export const ActSupplyFulfillmentRefusalReasonCode = {
  /**
   * ActSupplyFulfillmentRefusalReason
   */
  _ActSupplyFulfillmentRefusalReason: "_ActSupplyFulfillmentRefusalReason",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActSupplyFulfillmentRefusalReasonCode =
  typeof ActSupplyFulfillmentRefusalReasonCode[keyof typeof ActSupplyFulfillmentRefusalReasonCode];
