/**
 * The type of PlanDefinition.
 * http://terminology.hl7.org/ValueSet/plan-definition-type
 */
export const PlanDefinitionTypeCode = {
  /**
   * Order Set
   */
  "order-set": "order-set",

  /**
   * Clinical Protocol
   */
  "clinical-protocol": "clinical-protocol",

  /**
   * ECA Rule
   */
  "eca-rule": "eca-rule",

  /**
   * Workflow Definition
   */
  "workflow-definition": "workflow-definition",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PlanDefinitionTypeCode =
  typeof PlanDefinitionTypeCode[keyof typeof PlanDefinitionTypeCode];
