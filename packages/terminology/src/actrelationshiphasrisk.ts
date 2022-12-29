/**
 * A noteworthy undesired outcome of a patient's condition that is either likely enough to become an issue or is less likely but dangerous enough to be addressed.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasRisk
 */
export const ActRelationshipHasRiskCode = {
  /**
   * has risk
   */
  hasrisk: "RISK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasRiskCode =
  typeof ActRelationshipHasRiskCode[keyof typeof ActRelationshipHasRiskCode];
