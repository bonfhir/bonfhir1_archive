/**
 * Expresses values for describing the relationship relationship between an InvoiceElement or InvoiceElementGroup and a billable act.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipCostTracking
 */
export const ActRelationshipCostTrackingCode = {
  /**
   * has charge
   */
  hascharge: "CHRG",

  /**
   * has cost
   */
  hascost: "COST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipCostTrackingCode =
  typeof ActRelationshipCostTrackingCode[keyof typeof ActRelationshipCostTrackingCode];
