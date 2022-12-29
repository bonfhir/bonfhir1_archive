/**
 * The type of PlanDefinition.
 * http://terminology.hl7.org/ValueSet/plan-definition-type
 */
export const PlanDefinitionTypeCode = {
  /**
   * Order Set
   */
  OrderSet: "order-set",

  /**
   * Clinical Protocol
   */
  ClinicalProtocol: "clinical-protocol",

  /**
   * ECA Rule
   */
  ECARule: "eca-rule",

  /**
   * Workflow Definition
   */
  WorkflowDefinition: "workflow-definition",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PlanDefinitionTypeCode =
  typeof PlanDefinitionTypeCode[keyof typeof PlanDefinitionTypeCode];
